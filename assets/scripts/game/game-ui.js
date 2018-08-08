'use strict'

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
}

module.exports = {
  addMark,
  clearBoard
}
