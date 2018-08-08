'use strict'

const gameEngine = require('./game-logic.js')

const addTopLeft = () => {
  gameEngine.addCurrentPlayer(0)
}

const addTopMiddle = () => {
  gameEngine.addCurrentPlayer(1)
}

const addTopRight = () => {
  gameEngine.addCurrentPlayer(2)
}

const addMiddleLeft = () => {
  gameEngine.addCurrentPlayer(3)
}

const addMiddleMiddle = () => {
  gameEngine.addCurrentPlayer(4)
}

const addMiddleRight = () => {
  gameEngine.addCurrentPlayer(5)
}

const addBottomLeft = () => {
  gameEngine.addCurrentPlayer(6)
}

const addBottomMiddle = () => {
  gameEngine.addCurrentPlayer(7)
}

const addBottomRight = () => {
  gameEngine.addCurrentPlayer(8)
}

const newGame = () => {
  gameEngine.resetBoard()
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
}

module.exports = {
  addHandlers
}
