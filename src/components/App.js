import React from 'react'

import About from './About'
import Contact from './Contact'
import Events from './Events'
import Home from './Home'
import Resources from './Resources'
import Footer from './Footer'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="main-content">
          <Home />
          <About />
          <Events />
          <Resources />
          <Contact />
        </div>
        <Footer />
      </div>
    )
  }
}
