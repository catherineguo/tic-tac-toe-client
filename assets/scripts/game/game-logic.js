'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./game-ui.js')
const store = require('../store.js')

let currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const logGame = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
}

const addCurrentPlayer = (indexNum) => {
  if (currentBoard.every(isBoardFull)) {
  } else if (currentBoard[indexNum]) {
    ui.invalidMoveMessage()
  } else {
    currentBoard[indexNum] = currentPlayer
    ui.addMark(indexNum, currentPlayer)
    checkWin()
  }
}

const switchPlayers = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    ui.turnMessage(currentPlayer)
  } else {
    currentPlayer = 'x'
    ui.turnMessage(currentPlayer)
  }
}

const resetBoard = () => {
  currentBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'x'
  ui.clearBoard()
}

const isBoardFull = (spot) => {
  if (spot) {
    return true
  } else {
    return false
  }
}

const checkWin = () => {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    ui.winMessage(currentBoard[0])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') ||
  (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    ui.winMessage(currentBoard[3])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    ui.winMessage(currentBoard[6])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    ui.winMessage(currentBoard[0])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') ||
  (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    ui.winMessage(currentBoard[1])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    ui.winMessage(currentBoard[2])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    ui.winMessage(currentBoard[0])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    ui.winMessage(currentBoard[2])
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if (currentBoard.every(isBoardFull)) {
    $('#message-box').html(`<p>It's a draw!</p>`)
  } else {
    switchPlayers()
  }
}

module.exports = {
  addCurrentPlayer,
  switchPlayers,
  resetBoard,
  checkWin,
  logGame
}
