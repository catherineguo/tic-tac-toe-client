'use strict'

const addTopLeft = () => {
  console.log('top left clicked!')
}

const addTopMiddle = () => {
  console.log('top middle clicked!')
}

const addTopRight = () => {
  console.log('top right clicked!')
}

const addMiddleLeft = () => {
  console.log('middle left clicked!')
}

const addMiddleMiddle = () => {
  console.log('middle middle clicked!')
}

const addMiddleRight = () => {
  console.log('middle right clicked!')
}

const addBottomLeft = () => {
  console.log('bottom left clicked!')
}

const addBottomMiddle = () => {
  console.log('bottom middle clicked!')
}

const addBottomRight = () => {
  console.log('bottom right clicked!')
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
}

module.exports = {
  addHandlers
}
