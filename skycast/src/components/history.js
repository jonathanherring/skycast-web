import React from 'react'
import Moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

 const History = ({ history }) => {
  
    if (!history.hourly ) {
        return <section />
      } 
    const tempData = []
    const windData = []

    function organizeTemp() {
      history.hourly.data.map(hour => {
        tempData.push({
          name: Moment.unix(hour.time).format('h a'),
          temperature: Math.round(hour.temperature)
        })
      })
      return tempData
    }
    function organizeWind() {
      history.hourly.data.map(hour => {
        windData.push({
          name: Moment.unix(hour.time).format('h a'),
          windSpeed: hour.windSpeed
        })
      })
      console.log('wind speeds hourly', windData)
      return windData
    }

    organizeTemp()
    organizeWind()

    return (
      <div className="d-flex align-items-center flex-column">
        <div className="p-2">
          <div >
            <LineChart
              width={800}
              height={200}
              data={tempData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#d82e22" />
            </LineChart>
          </div>
        </div>

        <div className="p-2">
          <div >
            <LineChart
              width={800}
              height={200}
              data={windData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="windSpeed" stroke="#d82e22" />
            </LineChart>
          </div>
        </div>
      </div>

      
    )
  }

export default History
