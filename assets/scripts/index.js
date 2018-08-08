'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEngine = require('./game-engine/board.js')
const gameHandlers = require('./game-engine/game-events.js')

let currentBoard = ['', 'o', '', 'x', '', '', '', '']
let currentPlayer = 'x'

const addCurrentPlayer = (indexNum) => {
  if (currentBoard[indexNum]) {
    console.log('sorry that spot is taken')
  } else {
    currentBoard[indexNum] = currentPlayer
  }
}

const switchPlayers = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

$(() => {
  gameHandlers.addHandlers()
  $('#new-game-button').on('click', () => {
    $('.game-container').show()
  })
})
