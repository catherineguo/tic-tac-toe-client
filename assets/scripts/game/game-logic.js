'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./game-ui.js')

let currentBoard = ['', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const addCurrentPlayer = (indexNum) => {
  if (currentBoard[indexNum]) {
  } else {
    currentBoard[indexNum] = currentPlayer
    ui.addMark(indexNum, currentPlayer)
    switchPlayers()
  }
}

const switchPlayers = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const resetBoard = () => {
  currentBoard = ['', '', '', '', '', '', '', '']
  currentPlayer = 'x'
}

module.exports = {
  addCurrentPlayer,
  switchPlayers,
  resetBoard
}
