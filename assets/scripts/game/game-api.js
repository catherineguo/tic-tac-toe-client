'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = (id, data) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiUrl + `/games/`,
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
