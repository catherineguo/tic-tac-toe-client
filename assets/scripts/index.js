'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/game-events.js')
const authEvents = require('./auth/auth-events.js')

$(() => {
  $('#tic-tac-toe').hide()
  gameEvents.addHandlers()
  authEvents.addHandlers()
})
