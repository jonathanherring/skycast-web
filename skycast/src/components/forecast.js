import React from 'react'
import Moment from 'moment'
import ForecastDays from './forecast_days'


 const Forecast = ({weather}) => {
    if (!weather || !weather.currently) {
        return <section />
      } 
    const futureDays = weather.daily.data  
    const days = [] 
    for(var i = 1; i < futureDays.length; i++) {
        days[i] =
            <ForecastDays 
            icon={futureDays[i].icon}
            day={Moment.unix(futureDays[i].time).format('dddd MMMM Do')}
            dayHigh={Math.round(futureDays[i].temperatureHigh)}
            dayLow ={Math.round(futureDays[i].temperatureLow)}
            key ={futureDays[i].time}
            />
    }
    return (
        <section className="col-12 col-md-5 mb-2 mr-auto">
            <div className="card bg-transparent text-info border-info">
                <div className="card-header bg-info border-info text-center">
                    <h5 className="text-white">7-Day Forecast</h5>
                </div>
                <ul className="container list-group list-group-flush ">
                    {days}
                </ul>
            </div>
        </section>
    )
}
export default Forecast