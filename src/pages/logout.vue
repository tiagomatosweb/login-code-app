<template>
  <div>
    Logging out...
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

const {logout} = useAuth()
const router = useRouter()
onMounted(async () => {
  await logout()
  await router.push('login')
})
</script>