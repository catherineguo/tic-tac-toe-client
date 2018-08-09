'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/game-events.js')
const authEvents = require('./auth/auth-events.js')

$(() => {
  $('#password-change-success').hide()
  $('#password-change-fail').hide()
  $('#tic-tac-toe').hide()
  $('#sign-up-container').hide()
  $('#change-password-container').hide()
  gameEvents.addHandlers()
  authEvents.addHandlers()
})
