'use strict'

const addCurrentPlayer = (indexNum, currentPlayer, winOrDraw) => {
  addMark(indexNum, currentPlayer)
  if (winOrDraw === '') {
    turnMessage(currentPlayer)
  } else if (winOrDraw === 'win') {
    winMessage(currentPlayer)
  } else {
    $('#message-box').html(`<p>It's a draw!</p>`)
  }
}

const addMark = (indexNum, currentPlayer) => {
  if (indexNum === 0) {
    $('#topLeft').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 1) {
    $('#topMiddle').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 2) {
    $('#topRight').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 3) {
    $('#middleLeft').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 4) {
    $('#middleMiddle').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 5) {
    $('#middleRight').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 6) {
    $('#bottomLeft').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 7) {
    $('#bottomMiddle').html(`<p>${currentPlayer}</p>`)
  } else if (indexNum === 8) {
    $('#bottomRight').html(`<p>${currentPlayer}</p>`)
  }
}

const clearBoard = () => {
  $('#game-container div div').html('')
  $('#message-box').html(`<p>Player 1's turn</p>`)
}

const turnMessage = (currentPlayer) => {
  if (currentPlayer === 'o') {
    $('#message-box').html(`<p>Player 1's turn</p>`)
  } else {
    $('#message-box').html(`<p>Player 2's turn</p>`)
  }
}

const winMessage = (winner) => {
  if (winner === 'x') {
    $('#message-box').html(`<p>Player 1 wins!</p>`)
  } else {
    $('#message-box').html(`<p>Player 2 wins!</p>`)
  }
}

const invalidMoveMessage = () => {
  $('#message-box p').text(`That spot is taken!`)
}

module.exports = {
  addCurrentPlayer,
  addMark,
  clearBoard,
  turnMessage,
  winMessage,
  invalidMoveMessage
}
