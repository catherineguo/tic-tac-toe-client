'use strict'

const gameEngine = require('./game-logic.js')
const gameApi = require('./game-api.js')
const ui = require('./game-ui.js')

const gameInit = () => {
  $('#password-change-success').hide()
  $('#password-change-fail').hide()
  $('#tic-tac-toe').hide()
  $('#sign-up-container').hide()
  $('#change-password-container').hide()
}

const newGame = () => {
  gameApi.createGame()
    .then(gameEngine.createGameSuccess)
    .catch(gameEngine.createGameFail)
}

const updateSquare = (indexNum) => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(indexNum)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(indexNum)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(indexNum, value, boolean)
      .then((response) => {
        gameEngine.updateSuccess(indexNum, response)
      })
      .catch(gameEngine.updateGameFail)
  }
}

const toggleGameStats = (event) => {
  gameApi.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFail)
}

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#square' + i.toString()).on('click', () => { updateSquare(i) })
  }
  $('#new-game-button').on('click', newGame)
  $('#game-stats').on('click', toggleGameStats)
}

module.exports = {
  addHandlers,
  gameInit
}
