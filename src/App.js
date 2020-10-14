import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import {Pages} from './constants'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: Pages.Home
    }
  }

  changePage = ev => {
    this.setState({
      page: ev.target.dataset.value
    })
  }

  renderPage = () => {
    switch (this.state.page) {
      case Pages.About:
        return <About />
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar changePage={this.changePage} />
        {this.renderPage()}
      </div>
    )
  }
}
