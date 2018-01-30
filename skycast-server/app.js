const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const weatherProxy = require("./routes/weather_proxy.js")
const request = require("request")
require("dotenv").load()

const PORT = process.env.PORT || 3001

app.use(cors())

app.get("/api", function(req, res, next) {
  const API_URL = `https://api.darksky.net/forecast/${
    process.env.DARK_SKY_API_KEY
  }/${req.query.lat},${req.query.lng}`
  console.log(req.query)
  request(API_URL, function(error, response, body) {
    if (error) {
      return next(error)
    }
    if (!error && response.statusCode === 200) {
      res.send(body)
    }
  })
})

app.use(function(req, res, next) {
  const err = new Error("Not Found")
  err.status = 404
  res.send("NOT FOUND")
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
  console.error(err)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
