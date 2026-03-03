<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <UCard class="w-full max-w-md">
      <LoginCodeRequest />
      <LoginCodeVerify />
    </UCard>
  </div>
</template>

<script setup>
import LoginCodeRequest from '../components/LoginCodeRequest.vue'
import LoginCodeVerify from '../components/LoginCodeVerify.vue'

definePage({
  meta: {
    auth: 'guest',
  },
})
</script>
