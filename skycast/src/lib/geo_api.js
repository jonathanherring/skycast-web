const fetch = require('isomorphic-fetch')


const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`


const locate = ( address ) => {
    return fetch(API_URL + address + `&key=${process.env.GEO_API_KEY}`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

module.exports = {locate}