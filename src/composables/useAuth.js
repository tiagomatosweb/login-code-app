import { ref, computed } from 'vue'
import { authAPI } from '../api/auth.js'

const user = ref(null)

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value)

  const fetchUser = async () => {
    try {
      const data = await authAPI.fetchUser().then(response => response.data)
      user.value = data
      return data
    } catch (e) {
      if (e.status === 401) {
        user.value = null
        return null
      }
      throw e
    }
  }

  const logout = async () => {
    await authAPI.logout()
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    fetchUser,
    logout,
  }
}

