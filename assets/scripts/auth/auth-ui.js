'use strict'

const store = require('../store.js')

const signOutClear = () => {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#change-password input').val('')
  $('#user-auth-message').html('')
  $('#change-password-container').hide()
}

const signUpSuccess = () => {
  $('#user-auth-message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#user-auth-message').html("<p>You've signed up! Now sign in.</p>").addClass('alert alert-success')
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#sign-up-container').hide()
  $('#sign-in-container').show()
  $('#sign-in-container a').hide()
}

const signUpFail = () => {
  $('#user-auth-message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  if ($('#password').val() !== $('#confirm-password').val()) {
    $('#user-auth-message').html("<p>Sorry, your passwords don't match.</p>").addClass('alert alert-danger')
    $('#password').val('')
    $('#confirm-password').val('')
  } else {
    $('#user-auth-message').html('<p>Sorry, please try again.</p>').addClass('alert alert-danger')
    $('#sign-up input').val('')
  }
}

const signInSuccess = (response) => {
  $('#sign-in input').val('')
  $('#user-auth-message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  store.user = response.user
  $('#sign-in-container').hide()
}

const signInFail = () => {
  $('#user-auth-message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#user-auth-message').html('<p>Oops, try again.</p>').addClass('alert alert-danger')
  $('#sign-in input').val('')
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
  $('#change-password input').val('')
}

const signOutSuccess = () => {
  signOutClear()
  $('#sign-in-container').show()
  $('#sign-in-container a').show()
  $('#tic-tac-toe').hide()
}

const signOutFail = () => {
  $('#user-auth-message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
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
