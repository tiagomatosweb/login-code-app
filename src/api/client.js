import { ofetch } from 'ofetch'
import { useCookies } from '@vueuse/integrations/useCookies'
import errorMessages from './errorMessages.js'

const CSRF_ENDPOINT = '/sanctum/csrf-cookie'

let csrfPromise = null
const cookies = useCookies(['XSRF-TOKEN'])

export function ensureCsrfCookie() {
  if (!csrfPromise) {
    csrfPromise = api(CSRF_ENDPOINT, {
      method: 'GET',
      _retriedCsrf: true,
    }).finally(() => {
      csrfPromise = null
    })
  }
  return csrfPromise
}

function clearCsrfCache() {
  csrfPromise = null
}

export const api = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  async onRequest({ options }) {
    const token = await cookies.get('XSRF-TOKEN')
    if (token) {
      options.headers.set('X-XSRF-TOKEN', token)
    }
  },
  async onResponseError({ request, options, response }) {
    const status = response?.status

    if (status === 419 && options && !options._retriedCsrf) {
      clearCsrfCache()
      const nextOptions = { ...options, _retriedCsrf: true }
      await ensureCsrfCookie()
      return api(request, nextOptions)
    }

    const message = errorMessages(response?._data?.error)
    throw { message, status }
  },
})
