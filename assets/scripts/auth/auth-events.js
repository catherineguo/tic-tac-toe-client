'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./auth-api.js')
const authUi = require('./auth-ui.js')

const showSignUp = (event) => {
  $('#sign-up-container').show()
  $('#sign-in-container').hide()
}

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = (event) => {
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}

const addHandlers = () => {
  $('#sign-up-link').on('click', showSignUp)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
