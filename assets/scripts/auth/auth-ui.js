'use strict'

const store = require('../store.js')
const gameEngine = require('../game/game-logic.js')

const signUpSuccess = (response) => {
  $('#user-auth-message').html("<p>You've signed up! Now sign in.</p>")
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#sign-up-container').hide()
  $('#sign-in-container').show()
  $('#sign-in-container a').hide()
}

const signUpFail = () => {
  $('#user-auth-message').html('<p>Sorry, try again. Check that your passwords match.</p>')
}

const signInSuccess = (response) => {
  $('#sign-in input').val('')
  $('#user-auth-message').html('')
  store.user = response.user
  gameEngine.resetBoard()
  $('#tic-tac-toe').show()
  $('#sign-in-container').hide()
}

const signInFail = () => {
  $('#user-auth-message').html('<p>Oops, try again.</p>')
}

const changePasswordSuccess = () => {
  $(window).scrollTop(0)
  $('#change-password input').val('')
  $('#change-password-container').hide()
  $('#password-change-success').show('fast').delay(800).hide('slow')
}

const changePasswordFail = () => {
  $(window).scrollTop(0)
  $('#password-change-fail').show('fast').delay(800).hide('slow')
}

const signOutSuccess = () => {
  $('#sign-in-container').show()
  $('#sign-in-container a').show()
  $('#tic-tac-toe').hide()
}

const signOutFail = () => {
  $('#user-auth-message').html('<p>Sign out failed.</p>')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
