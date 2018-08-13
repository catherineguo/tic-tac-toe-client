'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./auth-api.js')
const authUi = require('./auth-ui.js')
const gameApi = require('../game/game-api.js')
const gameEngine = require('../game/game-logic.js')

const showSignUp = (event) => {
  $('#sign-up-container').show()
  $('#sign-in-container').hide()
  $('#user-auth-message').html('').removeClass('alert alert-danger')
}

const showSignIn = (event) => {
  $('#sign-in-container').show()
  $('#sign-up-container').hide()
  $('#user-auth-message').html('').removeClass('alert alert-danger')
}

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(gameApi.createGame)
    .then(gameEngine.createGameSuccess)
    .catch(authUi.signInFail)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = (event) => {
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}

const toggleChangePassword = (event) => {
  $('#change-password-container').toggle()
  $('html, body').animate({
    scrollTop: $('#change-password-container').offset().top
  }, 1000)
  $('#change-password input').val('')
}

const addHandlers = () => {
  $('#sign-up-link').on('click', showSignUp)
  $('#back-to-signin').on('click', showSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-link').on('click', toggleChangePassword)
}

module.exports = {
  addHandlers
}
