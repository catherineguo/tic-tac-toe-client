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
  let emoji = ''
  if (currentPlayer === 'x') {
    emoji = '🍟'
  } else {
    emoji = '🍩'
  }
  if (indexNum === 0) {
    $('#topLeft').html(`<p>${emoji}</p>`)
  } else if (indexNum === 1) {
    $('#topMiddle').html(`<p>${emoji}</p>`)
  } else if (indexNum === 2) {
    $('#topRight').html(`<p>${emoji}</p>`)
  } else if (indexNum === 3) {
    $('#middleLeft').html(`<p>${emoji}</p>`)
  } else if (indexNum === 4) {
    $('#middleMiddle').html(`<p>${emoji}</p>`)
  } else if (indexNum === 5) {
    $('#middleRight').html(`<p>${emoji}</p>`)
  } else if (indexNum === 6) {
    $('#bottomLeft').html(`<p>${emoji}</p>`)
  } else if (indexNum === 7) {
    $('#bottomMiddle').html(`<p>${emoji}</p>`)
  } else if (indexNum === 8) {
    $('#bottomRight').html(`<p>${emoji}</p>`)
  }
}

const clearBoard = () => {
  $('#game-container div div').html('')
  $('#message-box').html(`<p>🍟's turn</p>`)
}

const turnMessage = (currentPlayer) => {
  if (currentPlayer === 'o') {
    $('#message-box').html(`<p>🍟's turn</p>`)
  } else {
    $('#message-box').html(`<p>🍩's turn</p>`)
  }
}

const winMessage = (winner) => {
  if (winner === 'x') {
    $('#message-box').html(`<p>🍟 wins!</p>`)
  } else {
    $('#message-box').html(`<p>🍩 wins!</p>`)
  }
}

const invalidMoveMessage = () => {
  $('#message-box p').text(`That spot is taken!`)
}

const onGetGamesSuccess = (response) => {
  let numOfGames = 0
  let completeGames = 0
  let incompleteGames = 0
  response.games.forEach((game) => {
    numOfGames++
    if (game.over) {
      completeGames++
    } else {
      incompleteGames++
    }
  })
  if (numOfGames === 0) {
  } else {
    numOfGames--
  }
  $('#game-stats-text').html(`Total Games Played: ${numOfGames}<p>Completed Games: ${completeGames}</p><p>Incomplete Games: ${incompleteGames}</p>`)
}

const onGetGamesFail = (response) => {
  $('#game-stats-text').html(`Sorry, something went wrong.`)
}

module.exports = {
  addCurrentPlayer,
  addMark,
  clearBoard,
  turnMessage,
  winMessage,
  invalidMoveMessage,
  onGetGamesSuccess,
  onGetGamesFail
}
