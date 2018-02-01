import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import darkSkyApi from './lib/dark_sky_api'
import geoApi from './lib/geo_api'
import SearchBar from "./components/search_bar"
import FetchButton from "./components/fetch_button"
import Current from "./components/current"


class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        coordinates: {},
        weather:{}
      }
      this.findCoordinates = this.findCoordinates.bind(this)
    //   this.findCoordinates("denver")
      this.fetchWeather = this.fetchWeather.bind(this)
    }
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

    render() {
      const locationSearch = _.debounce((term) => {this.findCoordinates(term) }, 500)
      return (
          <div>
        <SearchBar onSearchTermChange={locationSearch} />
        <FetchButton onClick={this.fetchWeather} />
        <Current weather={this.state.weather} />
        </div>
      )
    }
  }











ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
