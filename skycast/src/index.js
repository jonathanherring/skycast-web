import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import darkSkyApi from './lib/dark_sky_api'
import geoApi from './lib/geo_api'
import SearchBar from "./components/search_bar"


class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        coordinates: {},
        weather:{}
      }
      this.findCoordinates = this.findCoordinates.bind(this)
      this.findCoordinates("denver")
    }
    findCoordinates(term) {
      let result = geoApi.locate(term)
      result.then(location => {
        this.setState({
          coordinates: location.results[0].geometry.location
        })
      })
    }
    fetchWeather(lat,long) {
        let result = darkSkyApi.forecast(lat,long)
        result.then(weather => {
            this.setState({
                weather: weather
            })
        })
    }

    render() {
      const locationSearch = _.debounce((term) => {this.findCoordinates(term) }, 300)
      return (
        <SearchBar onSearchTermChange={locationSearch} />
      )
    }
  }











ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
