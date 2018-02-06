import React from "react"
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
  const humidity = weather.currently.humidity*100

  return (
    <section className="col-12 col-md-5 mb-2 ml-auto">
    <div className="card text-info rounded">
      <div className="card border-info text-info bg-transparent text-center rounded" >
      <div className="card-header bg-info border-info text-center">
                    <h4 className="text-white">Current</h4>
                </div>
      <div className="text-center">
        <Skycons className="w-75" color="#00a4bc" icon={icon.toUpperCase().replace(/-/g, "_")} autoplay={true} />
        </div>
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
      </div>
    </section>
  )
}
export default Current
