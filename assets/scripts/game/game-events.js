'use strict'

const gameEngine = require('./game-logic.js')
const gameApi = require('./game-api.js')
const ui = require('./game-ui.js')

const newGame = () => {
  gameApi.createGame()
    .then(gameEngine.createGameSuccess)
    .catch(gameEngine.createGameFail)
}

const addTopLeft = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(0)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(0)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(0, value, boolean)
      .then(gameEngine.updateGameSuccessTL)
      .catch(gameEngine.updateGameFail)
  }
}

const addTopMiddle = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(1)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(1)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(1, value, boolean)
      .then(gameEngine.updateGameSuccessTM)
      .catch(gameEngine.updateGameFail)
  }
}

const addTopRight = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(2)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(2)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(2, value, boolean)
      .then(gameEngine.updateGameSuccessTR)
      .catch(gameEngine.updateGameFail)
  }
}

const addMiddleLeft = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(3)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(3)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(3, value, boolean)
      .then(gameEngine.updateGameSuccessML)
      .catch(gameEngine.updateGameFail)
  }
}

const addMiddleMiddle = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(4)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(4)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(4, value, boolean)
      .then(gameEngine.updateGameSuccessMM)
      .catch(gameEngine.updateGameFail)
  }
}

const addMiddleRight = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(5)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(5)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(5, value, boolean)
      .then(gameEngine.updateGameSuccessMR)
      .catch(gameEngine.updateGameFail)
  }
}

const addBottomLeft = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(6)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(6)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(6, value, boolean)
      .then(gameEngine.updateGameSuccessBL)
      .catch(gameEngine.updateGameFail)
  }
}

const addBottomMiddle = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(7)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(7)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(7, value, boolean)
      .then(gameEngine.updateGameSuccessBM)
      .catch(gameEngine.updateGameFail)
  }
}

const addBottomRight = () => {
  if (!gameEngine.canContinue()) {
  } else if (!gameEngine.canAddPlayer(8)) {
    ui.invalidMoveMessage()
  } else {
    const value = gameEngine.shareCurrentPlayer()
    gameEngine.updateCurrentBoard(8)
    const boolean = !gameEngine.canContinue()
    gameApi.updateGame(8, value, boolean)
      .then(gameEngine.updateGameSuccessBR)
      .catch(gameEngine.updateGameFail)
  }
}

const toggleGameStats = (event) => {
  gameApi.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFail)
}

const addHandlers = () => {
  $('#topLeft').on('click', addTopLeft)
  $('#topMiddle').on('click', addTopMiddle)
  $('#topRight').on('click', addTopRight)
  $('#middleLeft').on('click', addMiddleLeft)
  $('#middleMiddle').on('click', addMiddleMiddle)
  $('#middleRight').on('click', addMiddleRight)
  $('#bottomLeft').on('click', addBottomLeft)
  $('#bottomMiddle').on('click', addBottomMiddle)
  $('#bottomRight').on('click', addBottomRight)
  $('#new-game-button').on('click', newGame)
  $('#start-new-game').on('click', newGame)
  $('#game-stats').on('click', toggleGameStats)
}

module.exports = {
  addHandlers
}
