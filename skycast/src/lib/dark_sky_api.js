const fetch = require('isomorphic-fetch')

const API_URL = 'https://skycast-proxy.herokuapp.com/api'
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

  const history = ( latitude, longitude, time ) => {
    return fetch(API_URL + `/history?lat=${latitude}&lng=${longitude}&time=${time}`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json dark sky HISTORY', json)
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }



module.exports = {forecast, history}
