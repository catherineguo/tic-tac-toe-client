'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./auth-api.js')
const authUi = require('./auth-ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
