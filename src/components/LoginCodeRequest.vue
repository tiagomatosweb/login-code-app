<template>
  <UAuthForm
    :schema="schema"
    title="Entrar"
    description="Digite seu e-mail para receber um código de acesso."
    icon="i-lucide-mail"
    :fields="fields"
    :submit="{ label: 'Enviar código', block: true }"
    loading-auto
    @submit="onSubmit"
  />
</template>

<script setup>
import { object, string } from 'yup'

const schema = object({
  email: string().email().required().label('E-mail'),
})

const fields = [
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    required: true,
  },
]

const onSubmit = async ({ data }) => {
  console.log(data);
}
</script>

