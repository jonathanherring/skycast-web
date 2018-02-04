import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Moment from 'moment'
import darkSkyApi from './lib/dark_sky_api'
import geoApi from './lib/geo_api'
import SearchBar from "./components/search_bar"
import FetchWeatherButton from "./components/fetch_weather_button"
import FetchHistoryButton from "./components/fetch_history_button"
import Current from "./components/current"
import Forecast from "./components/forecast"
import History from "./components/history"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        coordinates: {},
        weather:{},
        history: {},
        time: Moment()
      }
      this.findCoordinates = this.findCoordinates.bind(this)
      this.fetchWeather = this.fetchWeather.bind(this)
      this.fetchHistory = this.fetchHistory.bind(this)
      this.handleChange = this.handleChange.bind(this);
    }

    // component will mount , check storage, see if it exists
    findCoordinates(term) {
      let result = geoApi.locate(term)
      result.then(location => {
        this.setState({
          coordinates: location.results[0].geometry.location
        })
        console.log(this.state.coordinates)
      })
    }
    fetchWeather() {
        let lat = this.state.coordinates.lat
        let lng = this.state.coordinates.lng
        let result = darkSkyApi.forecast(lat,lng)
        result.then(weather => {
            this.setState({
                weather: weather
            })
            console.log(this.state.weather)
        })
    }
    fetchHistory() {
        let lat = this.state.coordinates.lat
        let lng = this.state.coordinates.lng
        let time = this.state.time.unix()
        let result = darkSkyApi.history(lat,lng,time)
        result.then(history => {
            this.setState({
                history: history
            })
            console.log(this.state.history)
        })
    }
    handleChange(date) {
        this.setState({
          time: date 
        });
        console.log(this.state.time)
      }

    render() {
      const locationSearch = _.debounce((term) => {this.findCoordinates(term) }, 500)
      return (
          <div>
        <SearchBar onSearchTermChange={locationSearch} />
        <FetchWeatherButton onClick={this.fetchWeather} />
        <div className="row mt-4 mx-1 mx-sm-2 mx-md-3 mx-lg-5">
        <Current weather={this.state.weather} />
        <Forecast weather={this.state.weather} />
        <DatePicker selected={this.state.time}
        onChange={this.handleChange} />
        </div>
        <div className="row mx-1 mx-sm-2 mx-md-3 mx-lg-5">
        <FetchHistoryButton onClick={this.fetchHistory} />
        <History history={this.state.history} />
        </div>
        </div>
      )
    }
  }











ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();










ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
