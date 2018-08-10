'use strict'

const gameEngine = require('./game-logic.js')
const gameApi = require('./game-api.js')

const newGame = () => {
  gameApi.createGame()
    .then(gameEngine.createGameSuccess)
    .catch(gameEngine.createGameFail)
}

const addTopLeft = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(0, value, isGameOver)
    .then(gameEngine.updateGameSuccessTL)
    .catch(gameEngine.updateGameFail)
}

const addTopMiddle = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(1, value, isGameOver)
    .then(gameEngine.updateGameSuccessTM)
    .catch(gameEngine.updateGameFail)
}

const addTopRight = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(2, value, isGameOver)
    .then(gameEngine.updateGameSuccessTR)
    .catch(gameEngine.updateGameFail)
}

const addMiddleLeft = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(3, value, isGameOver)
    .then(gameEngine.updateGameSuccessML)
    .catch(gameEngine.updateGameFail)
}

const addMiddleMiddle = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(4, value, isGameOver)
    .then(gameEngine.updateGameSuccessMM)
    .catch(gameEngine.updateGameFail)
}

const addMiddleRight = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(5, value, isGameOver)
    .then(gameEngine.updateGameSuccessMR)
    .catch(gameEngine.updateGameFail)
}

const addBottomLeft = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(6, value, isGameOver)
    .then(gameEngine.updateGameSuccessBL)
    .catch(gameEngine.updateGameFail)
}

const addBottomMiddle = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(7, value, isGameOver)
    .then(gameEngine.updateGameSuccessBM)
    .catch(gameEngine.updateGameFail)
}

const addBottomRight = () => {
  const value = gameEngine.shareCurrentPlayer()
  const isGameOver = gameEngine.shareWinStatus()
  gameApi.updateGame(8, value, isGameOver)
    .then(gameEngine.updateGameSuccessBR)
    .catch(gameEngine.updateGameFail)
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
}

module.exports = {
  addHandlers
}
