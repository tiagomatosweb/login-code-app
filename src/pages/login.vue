<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <UCard class="w-full max-w-md">
      <LoginCodeRequest 
        v-if="!emailToVerify"
        @code-sent="email => emailToVerify = email"
      />
      <LoginCodeVerify 
        :email="emailToVerify"
        v-else
      />
    </UCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginCodeRequest from '../components/LoginCodeRequest.vue'
import LoginCodeVerify from '../components/LoginCodeVerify.vue'

definePage({
  meta: {
    auth: 'guest',
  },
})

const emailToVerify = ref(null)
</script>
