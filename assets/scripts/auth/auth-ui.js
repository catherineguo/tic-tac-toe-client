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
  $('#message').text('Password changed.')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password input').val('')
}

const changePasswordFail = () => {
  $('#message').text('Failed to change password.')
  $('#message').removeClass()
  $('#message').addClass('fail')
}

const signOutSuccess = () => {
  $('#message').text('Signed out.')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signOutFail = () => {
  $('#message').text('Sign out failed.')
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
