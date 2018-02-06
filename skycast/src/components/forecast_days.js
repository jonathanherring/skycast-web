import React from 'react'
import Skycons from 'react-skycons'

 const ForecastDays = ({icon, day, dayHigh, dayLow}) => {

    return (
        <li className="days list-group-item bg-transparent row d-flex justiy-content-between">
            <div className="col-5 col-sm-4 col-md-7 col-lg-6">
                <Skycons icon={icon.toUpperCase().replace(/-/g, "_")} autoplay={true}/>
            </div>
            <div className="col-7 col-sm-8 col-md-5 col-lg-6">
                <p>{day}</p>
                <p>{dayHigh}&deg;F / {dayLow}&deg;F</p>
            </div>
            
        </li>
    )
}

export default ForecastDays