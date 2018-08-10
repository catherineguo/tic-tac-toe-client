'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + 'games/',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateGame = (index, value, over) => {
  return $.ajax({
    url: config.apiUrl + `games/` + store.game.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': `${index}`,
          'value': `${value}`
        },
        'over': `${over}`
      }
    }
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiUrl + `games/`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
