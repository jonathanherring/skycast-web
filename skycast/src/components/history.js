import React, { Component } from 'react'
import Moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

 const History = ({ history }) => {
  
    if (!history.hourly ) {
        return <section />
      } 
    const data = []
    function organize() {
      history.hourly.data.map(hour => {
        data.push({
          name: Moment.unix(hour.time).format('h, a'),
          temperature: Math.round(hour.temperature)
        })
      })
      return data
    }
    organize()

    return (
      <div>
        <h3>Past</h3>
        <div>
          <div>
            <LineChart
              width={1000}
              height={200}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#d82e22" />
            </LineChart>
          </div>
        </div>
      </div>
    )
  }

export default History
