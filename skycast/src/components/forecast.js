import React from 'react'
import Moment from 'moment'
import ForecastDays from './forecast_days'


 const Forecast = ({weather}) => {
    if (!weather || !weather.currently) {
        return <section />
      } 
    const days = weather.daily.data.map((day) => {
        return (
            <ForecastDays 
            icon={day.icon}
            day={Moment.unix(day.time).format('dddd MMMM Do')}
            dayHigh={Math.round(day.temperatureHigh)}
            dayLow ={Math.round(day.temperatureLow)}
            key ={day.time}
            />
        )
    })
    return (
        <section className="col-12 col-md-5 mb-2 mr-auto">
            <div className="card bg-transparent text-info border-info">
                <div className="card-header bg-info border-info text-center">
                    <h4></h4>
                </div>
                <ul className="container list-group list-group-flush ">
                    {days}
                </ul>
            </div>
        </section>
    )
}
export default Forecast