'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  console.log(response)
  $('#message').text("You've signed up!")
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
}

const signUpFail = () => {
  $('#message').text('Sorry, try again. Check that your passwords match.')
  $('#message').removeClass()
  $('#message').addClass('fail')
}

const signInSuccess = (response) => {
  console.log(response)
  $('#message').text("You're signed in!")
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  store.user = response.user
}

const signInFail = () => {
  $('#message').text('Oops, try again.')
  $('#message').removeClass()
  $('#message').addClass('fail')
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
