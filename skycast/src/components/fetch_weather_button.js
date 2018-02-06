import React, { Component } from "react"

class FetchWeatherButton extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <div className="button">
          <button onClick={this.props.onClick}
          >Show me the weather</button>
        </div>
    )
  }
}

export default FetchWeatherButton
