<template>
  <div class="min-h-screen flex items-center justify-center">
    <UCard class="w-full max-w-2xl">
      <h1 class="text-2xl">Hello World</h1>

      <div class="mt-4 space-y-4">
        <pre>{{ user }}</pre>

        <UButton 
          label="Logout"
          to="/logout"
        />
      </div>
    </UCard>
  </div>
</template>

<script setup>
import {useAuth} from '../composables/useAuth.js'

const {user} = useAuth()
</script>
