import React from 'react'

import About from './About'
import Contact from './Contact'
import Events from './Events'
import Home from './Home'
import Resources from './Resources'

import {Pages} from '../constants/constants'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div data-value={Pages.Home} className="logo-container">
          <div className="logo" />
        </div>
        <Home />
        <About />
        <Events />
        <Resources />
        <Contact />
      </div>
    )
  }
}
