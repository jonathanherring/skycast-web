import React, { Component } from "react"
import Moment from "moment"
import Skycons from "react-skycons"

const Current = ({ weather }) => {
  if (!weather || !weather.currently) {
    return <section />
  } 
  const weatherHourly = weather.hourly
  const today = Moment.unix(weather.currently.time).format("dddd MMMM Do")
  const summary = weather.currently.summary
  const temperature = Math.round(weather.currently.temperature)
  const feelsLike = Math.round(weather.currently.apparentTemperature)
  const high = Math.round(weather.daily.data[0].temperatureHigh)
  const low = Math.round(weather.daily.data[0].temperatureLow)
  const windSpeed = weather.currently.windSpeed
  const icon = weather.currently.icon
  const humidity = weather.currently.humidity

  return (
    <section className="col-12 col-md-5 mb-2 ml-auto">
      <div className="card border-info text-info bg-transparent" >
        <Skycons className="w-75"icon={icon.toUpperCase().replace(/-/g, "_")} autoplay={true} />
        <h2 className="display-2 temp">{temperature}&deg;F</h2>
        <h3> {summary} </h3>
        <h4> {today} </h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item justify-content-between bg-transparent d-flex "><span>High/Low: </span><span>{high}&deg;F / {low}&deg;F</span></li>
        <li className="list-group-item justify-content-between bg-transparent d-flex "><span>Feels like:</span><span>{feelsLike}&deg;F</span></li>
        <li className="list-group-item justify-content-between bg-transparent d-flex "><span>Humidity: </span><span>{humidity} %</span></li>
        <li className="list-group-item justify-content-between bg-transparent d-flex "><span>Wind Speed: </span><span>{windSpeed} mp/h</span></li>
      </ul>
    </section>
  )
}
export default Current
