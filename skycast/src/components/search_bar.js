import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit()
  }
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-sm ">
        <a href="/" className="navbar-brand">
          SkyCast
        </a>
        <button
          className="navbar-toggler mb-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="d-flex" onSubmit={this.handleSubmit}>
                <input
                  className="form-control text-info"
                  id="search"
                  type="search"
                  placeholder="Enter an address or city"
                  aria-label="Search"
                  value={this.state.term}
                  onChange={event => this.onInputChange(event.target.value)}
                />
                <button className="btn btn-info pointer ml-2" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    )

    // return
    // (
    //   <div>
    //     <div className="search-bar">
    //       <h3 className="search-text">See the weather at any location</h3>
    //       <input
    //         autoFocus
    //         placeholder="enter a city or address"
    //         value={this.state.term}
    //         onChange={event => this.onInputChange(event.target.value)}
    //       />
    //     </div>
    //   </div>
    // )
  }
}

export default SearchBar
