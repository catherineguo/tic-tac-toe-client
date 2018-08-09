'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  console.log(response)
  $('#user-auth-message').html("<p>You've signed up! Now sign in.</p>")
  $('#sign-up input').val('')
  $('#sign-up-container').hide()
  $('#sign-in-container').show()
}

const signUpFail = () => {
  $('#user-auth-message').html('<p>Sorry, try again. Check that your passwords match.</p>')
}

const signInSuccess = (response) => {
  $('#sign-in input').val('')
  $('#user-auth-message').html('')
  store.user = response.user
  $('#tic-tac-toe').show()
  $('#sign-in-container').hide()
}

const signInFail = () => {
  $('#user-auth-message').html('<p>Oops, try again.</p>')
}

const changePasswordSuccess = () => {
  $('#user-auth-message').html('<p>Password changed.</p>')
  $('#change-password input').val('')
  $('#change-password-container').hide()
}

const changePasswordFail = () => {
  $('#user-auth-message').html('<p>Failed to change password.</p>')
  $('#message').removeClass()
  $('#message').addClass('fail')
}

const signOutSuccess = () => {
  $('#sign-in-container').show()
  $('#tic-tac-toe').hide()
}

const signOutFail = () => {
  $('#user-auth-message').html('<p>Sign out failed.</p>')
  $('#message').removeClass()
  $('#message').addClass('fail')
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
