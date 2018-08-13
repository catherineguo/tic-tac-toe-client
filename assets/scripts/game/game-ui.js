'use strict'

const addCurrentPlayer = (indexNum, currentPlayer, winOrDraw) => {
  addMark(indexNum, currentPlayer)
  if (winOrDraw === '') {
    turnMessage(currentPlayer)
  } else if (winOrDraw === 'win') {
    winMessage(currentPlayer)
  } else {
    $('#message-box').html(`<p>It's a draw!</p>`).addClass('draw-background')
  }
}

const addMark = (indexNum, currentPlayer) => {
  let emoji = ''
  if (currentPlayer === 'x') {
    emoji = '🍟'
  } else {
    emoji = '🍩'
  }
  $('#square' + indexNum.toString()).html(`<p>${emoji}</p>`)
}

const clearBoard = () => {
  $('#game-container div div').html('')
  $('#message-box').html(`<p>🍟's turn</p>`).removeClass('win-background').removeClass('draw-background').removeClass('warning-background')
}

const turnMessage = (currentPlayer) => {
  if (currentPlayer === 'o') {
    $('#message-box').html(`<p>🍟's turn</p>`).removeClass('warning-background')
  } else {
    $('#message-box').html(`<p>🍩's turn</p>`).removeClass('warning-background')
  }
}

const winMessage = (winner) => {
  if (winner === 'x') {
    $('#message-box').html(`<p>🍟 wins!</p>`).addClass('win-background').removeClass('warning-background')
  } else {
    $('#message-box').html(`<p>🍩 wins!</p>`).addClass('win-background').removeClass('warning-background')
  }
}

const invalidMoveMessage = () => {
  $('#message-box').addClass('warning-background')
  $('#message-box p').text(`That spot is taken!`)
}

const onGetGamesSuccess = (response) => {
  let numOfGames = 0
  let completeGames = 0
  let incompleteGames = 0

  const checkArrayWinner = (array) => {
    const topRow = [array[0], array[1], array[2]]
    const middleRow = [array[3], array[4], array[5]]
    const bottomRow = [array[6], array[7], array[8]]
    const leftColumn = [array[0], array[3], array[6]]
    const middleColumn = [array[1], array[4], array[7]]
    const rightColumn = [array[2], array[5], array[8]]
    const leftDiagonal = [array[0], array[4], array[8]]
    const rightDiagonal = [array[2], array[4], array[6]]
    const isX = (spot) => {
      if (spot === 'x') {
        return true
      } else {
        return false
      }
    }
    if (topRow.every(isX) || middleRow.every(isX) || bottomRow.every(isX) || leftColumn.every(isX) ||
        middleColumn.every(isX) || rightColumn.every(isX) || leftDiagonal.every(isX) || rightDiagonal.every(isX)) {
      return true
    } else {
      return false
    }
  }

  response.games.forEach((game) => {
    numOfGames++
    if (game.over) {
      completeGames++
    } else {
      incompleteGames++
    }
  })

  const calculateWins = () => {
    let wins = 0
    for (let i = 0; i < response.games.length; i++) {
      if (checkArrayWinner(response.games[i].cells)) {
        wins++
      }
    }
    return wins
  }

  const totalWins = calculateWins()

  if (numOfGames === 0) {
  } else {
    numOfGames--
  }
  if (incompleteGames === 0) {
  } else {
    incompleteGames--
  }
  $('#game-stats-text').html(`Total Games Played: ${numOfGames}<p>Total Wins: ${totalWins}</p><p>Completed Games: ${completeGames}</p><p>Incomplete Games: ${incompleteGames}</p>`)
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
