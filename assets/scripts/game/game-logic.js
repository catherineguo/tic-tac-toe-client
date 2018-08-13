'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./game-ui.js')
const store = require('../store.js')

let currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'
let winOrDraw = ''

const createGameSuccess = (response) => {
  store.game = response.game
  resetBoard()
  $('#start-new-game').hide()
  $('#tic-tac-toe').show()
}

const createGameFail = () => {
  $('#user-auth-message').html('<p>Sorry, starting a new game failed.</p>').addClass('alert alert-danger')
}

const canContinue = () => {
  if (winOrDraw === 'win' || winOrDraw === 'draw') {
    return false
  } else {
    return true
  }
}

const shareCurrentPlayer = () => {
  return currentPlayer
}

const canAddPlayer = (indexNum) => {
  if (currentBoard[indexNum]) {
    return false
  } else {
    return true
  }
}

const updateCurrentBoard = (indexNum) => {
  currentBoard[indexNum] = currentPlayer
  checkWin()
}

const updateSuccess = (indexNum, response) => {
  store.game = response.game
  ui.addCurrentPlayer(indexNum, currentPlayer, winOrDraw)
  switchPlayers()
}

const updateGameFail = () => {
  $('#user-auth-message').html('<p>Sorry, something went wrong.</p>').addClass('alert alert-danger')
}

const switchPlayers = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const resetBoard = () => {
  currentBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'x'
  winOrDraw = ''
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
    winOrDraw = 'win'
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') ||
  (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') ||
  (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    winOrDraw = 'win'
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    winOrDraw = 'win'
  } else if (currentBoard.every(isBoardFull)) {
    winOrDraw = 'draw'
  }
}

module.exports = {
  createGameSuccess,
  createGameFail,
  shareCurrentPlayer,
  canContinue,
  canAddPlayer,
  updateCurrentBoard,
  updateGameFail,
  updateSuccess
}
