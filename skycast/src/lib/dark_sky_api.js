const fetch = require('isomorphic-fetch')

const PROXY = "https://cors-anywhere.herokuapp.com/"
const API_KEY = "9292e78fd999ebe53dc9acf84503a7ad"
const API_URL = `https://api.darksky.net/forecast/${API_KEY}`

const forecast = ( latitude, longitude ) => {
    return fetch(PROXY + API_URL + `/${latitude}/${longitude}`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

module.exports = {forecast}
