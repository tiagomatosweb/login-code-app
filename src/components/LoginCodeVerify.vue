<template>
  <UAuthForm
    :schema="schema"
    title="Código de verificação"
    :description="`Digite o código de 6 dígitos enviado para seu e-email.`"
    icon="i-lucide-key-round"
    :fields="fields"
    :submit="{ label: 'Verificar', block: true }"
    loading-auto
    @submit="onSubmit"
  >
    <template #validation>
      <UAlert
        v-if="errorMessage"
        :title="errorMessage"
        variant="soft"
        color="error"
        icon="lucide:alert-triangle"
      />
    </template>
  </UAuthForm>
</template>

<script setup>
import { ref } from 'vue'
import { array, object, string } from 'yup'
import { authAPI } from '../api/auth'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const props = defineProps({
  email: {
    type: String,
    required: true,
  }
})
const errorMessage = ref(null)

const schema = object({
  code: array().of(string()).length(6).required().label('Código'),
})

const fields = [
  {
    name: 'code',
    type: 'otp',
    label: 'Código',
    length: 6,
    required: true,
  },
]

const {user} = useAuth()
const router = useRouter()

const onSubmit = async ({ data }) => {
  try {
    const code = data.code.join('')
    const response = await authAPI.verifyLoginCode(props.email, code)
    user.value = response.data
    await router.push('/')
  } catch(e) {
    errorMessage.value = e.message
  }
}
</script>

