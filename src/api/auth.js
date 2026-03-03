import { api } from './client'

export const authAPI = {
  fetchUser: () => api('/api/me'),
  requestLoginCode: (email) => api('/login-code/request', { method: 'POST', body: { email } }),
  verifyLoginCode: (email, code) => api('/login-code/verify', { method: 'POST', body: { email, code } }),
}
