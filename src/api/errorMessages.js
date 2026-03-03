const messages = {
  ServerErrorException: 'Something went wrong.',
  InvalidOrExpiredCode: 'Código inválido ou expirado. Solicite um novo código.',
}

export default (error) =>
  messages[error] ?? messages.ServerErrorException
