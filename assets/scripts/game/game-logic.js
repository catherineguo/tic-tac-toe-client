'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./game-ui.js')
const store = require('../store.js')

let currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const shareCurrentPlayer = () => {
  return currentPlayer
}

const shareWinStatus = () => {
  if ((currentBoard[0] === 'x' && currentBoard[1] === 'x' && currentBoard[2] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[1] === 'o' && currentBoard[2] === 'o')) {
    return true
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') ||
  (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    return true
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    return true
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    return true
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') ||
  (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    return true
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    return true
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    return true
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    return true
  } else if (currentBoard.every(isBoardFull)) {
    return true
  } else {
    return false
  }
}

const createGameSuccess = (response) => {
  store.game = response.game
  resetBoard()
  $('#start-new-game').hide()
  $('#tic-tac-toe').show()
}

const createGameFail = () => {
  $('#user-auth-message').html('<p>Sorry, making a new game failed.</p>').addClass('alert alert-danger')
}

const updateGameFail = () => {
  $('#user-auth-message').html('<p>Sorry, something went wrong.</p>').addClass('alert alert-danger')
}

const updateGameSuccessTL = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  // if (shareWinStatus && ) {
  //
  // }
  addCurrentPlayer(0)
}

const updateGameSuccessTM = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(1)
}

const updateGameSuccessTR = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(2)
}

const updateGameSuccessML = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(3)
}

const updateGameSuccessMM = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(4)
}

const updateGameSuccessMR = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(5)
}

const updateGameSuccessBL = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(6)
}

const updateGameSuccessBM = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(7)
}

const updateGameSuccessBR = (response) => {
  store.game = response.game
  console.log(`this is store`, store)
  addCurrentPlayer(8)
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
  createGameSuccess,
  createGameFail,
  shareCurrentPlayer,
  shareWinStatus,
  updateGameFail,
  updateGameSuccessTL,
  updateGameSuccessTM,
  updateGameSuccessTR,
  updateGameSuccessML,
  updateGameSuccessMM,
  updateGameSuccessMR,
  updateGameSuccessBL,
  updateGameSuccessBM,
  updateGameSuccessBR
}
