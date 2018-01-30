const fetch = require('isomorphic-fetch')

const API_URL = 'http://localhost:3001/api'
const forecast = ( latitude, longitude ) => {
    return fetch(API_URL + `?lat=${latitude}&lng=${longitude}`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json dark sky', json)
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

module.exports = {forecast}
