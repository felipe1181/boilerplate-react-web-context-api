import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Preencha esse campo para continuar'
  },
  string: {
    email: 'Preencha um e-mail válido',
    min: 'Preencha campo por completo.',
    max: 'Preencha campo por completo.',
    // eslint-disable-next-line no-template-curly-in-string
    matches: 'Preencha com um ${label} válido.'
  },
  number: {
    integer: 'Preencha com números inteiros',
    positive: 'Preencha com números positivos'
  }
})
export default yup
