import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import Moment from "moment"
import darkSkyApi from "./lib/dark_sky_api"
import geoApi from "./lib/geo_api"
import SearchBar from "./components/search_bar"
import FetchHistoryButton from "./components/fetch_history_button"
import Current from "./components/current"
import Forecast from "./components/forecast"
import History from "./components/history"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coordinates: {},
      address: "",
      weather: {},
      history: {},
      time: Moment(),
      searchHistory: []
    }
    this.findCoordinates = this.findCoordinates.bind(this)
    this.fetchWeather = this.fetchWeather.bind(this)
    this.fetchHistory = this.fetchHistory.bind(this)
    this.handleChange = this.handleChange.bind(this)
    

  }


// addHistory(address) {
//     const storageItems = localStorage.getItem('history')
//     const parsedStorageItems = JSON.parse(storageItems)
//     const newStorageItems = parsedStorageItems.concat([address])
//     localStorage.setItem('history', JSON.stringify(newStorageItems))
// }

//   addHistory(address) {
//     var historyObj = this.state.searchHistory.push(address);
//     localStorage.setItem('history',JSON.stringify(historyObj));
//   }

  findCoordinates(term) {
    let result = geoApi.locate(term)
    result.then(location => {
      this.setState({
        coordinates: location.results[0].geometry.location,
        address: location.results[0].formatted_address
      })
      console.log(this.state.coordinates)
      console.log(this.state.address)
    })
  }
  fetchWeather() {
    let lat = this.state.coordinates.lat
    let lng = this.state.coordinates.lng
    let result = darkSkyApi.forecast(lat, lng)
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
    let result = darkSkyApi.history(lat, lng, time)
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
    })
    console.log(this.state.time)
  }

  render() {
    const locationSearch = _.debounce(term => {
      this.findCoordinates(term)
    }, 500)
    let components = 
    <div>
    <SearchBar
          onSearchTermChange={locationSearch}
          onSubmit={this.fetchWeather}
        />
        {/* <Dropdown options={options} onChange={this._onSelect}  placeholder="Search History" /> */}
        </div>

        if (this.state.weather.currently) {
            components = 
            <div>
            <SearchBar
              onSearchTermChange={locationSearch}
              onSubmit={this.fetchWeather}
            />
            {/* <Dropdown options={options} onChange={this._onSelect}  placeholder="Search History" /> */}
            <section className="col-12 col-md-9 rounded border border-info mt-3 mx-auto text-center">
                <h1>{this.state.address} Weather</h1>
            </section>
            <div className="row mt-4 mx-1 mx-sm-2 mx-md-3 mx-lg-5">
              <Current weather={this.state.weather} />
              <Forecast weather={this.state.weather} />
            </div>
            <div className="row mx-1 mx-sm-2 mx-md-3 mx-lg-5">
              <section
                id="past"
                className="col-12 col-md-10 mx-auto rounded border border-info mb-4 p-0"
              >
                <div className="py-3 d-flex flex-column align-items-center">
                  <h2 className="">Weather History</h2>
                  <div className="text-center">
                    <DatePicker
                      selected={this.state.time}
                      onChange={this.handleChange}
                    />
                    <FetchHistoryButton onClick={this.fetchHistory} />
                  </div>
                </div>
                <History history={this.state.history} />
              </section>
            </div>
          </div>
        }

    return (
      <div>{components}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
