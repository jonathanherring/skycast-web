import React, { Component } from "react"

class FetchHistoryButton extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <div className="button">
          <button onClick={this.props.onClick}
          >Get Weather History</button>
        </div>
    )
  }
}

export default FetchHistoryButton