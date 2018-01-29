const express = require('express');
const request = require('request')
const router = express.Router();

const API_KEY = "AIzaSyAKGlt50YAYICALNT2KncJNqT9scdVKN9o"
const API_URL = `https://maps.googleapis.com/maps/api/geocode/key=${API_KEY}`

router.get('/', function(req, res){ 
    request(API_URL, function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });

  module.exports = router