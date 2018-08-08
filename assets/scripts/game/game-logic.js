'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const ui = require('./game-ui.js')

let currentBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'x'

const addCurrentPlayer = (indexNum) => {
  if (currentBoard[indexNum]) {
  } else {
    currentBoard[indexNum] = currentPlayer
    ui.addMark(indexNum, currentPlayer)
    checkWin()
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
    console.log('first row win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[3] === 'x' && currentBoard[4] === 'x' && currentBoard[5] === 'x') ||
  (currentBoard[3] === 'o' && currentBoard[4] === 'o' && currentBoard[5] === 'o')) {
    console.log('second row win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[6] === 'x' && currentBoard[7] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[6] === 'o' && currentBoard[7] === 'o' && currentBoard[8] === 'o')) {
    console.log('third row win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[0] === 'x' && currentBoard[3] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[3] === 'o' && currentBoard[6] === 'o')) {
    console.log('first column win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[1] === 'x' && currentBoard[4] === 'x' && currentBoard[7] === 'x') ||
  (currentBoard[1] === 'o' && currentBoard[4] === 'o' && currentBoard[7] === 'o')) {
    console.log('second column win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[2] === 'x' && currentBoard[5] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[5] === 'o' && currentBoard[8] === 'o')) {
    console.log('third column win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[0] === 'x' && currentBoard[4] === 'x' && currentBoard[8] === 'x') ||
  (currentBoard[0] === 'o' && currentBoard[4] === 'o' && currentBoard[8] === 'o')) {
    console.log('diagonal towards right win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if ((currentBoard[2] === 'x' && currentBoard[4] === 'x' && currentBoard[6] === 'x') ||
  (currentBoard[2] === 'o' && currentBoard[4] === 'o' && currentBoard[6] === 'o')) {
    console.log('diagonal towards left win!')
    currentBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  } else if (currentBoard.every(isBoardFull)) {
    console.log("it's a draw!")
  }
}

module.exports = {
  addCurrentPlayer,
  switchPlayers,
  resetBoard,
  checkWin
}
