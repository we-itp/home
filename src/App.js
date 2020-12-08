import React from 'react'
import './App.css'
import NavItem from './NavItem'
import Home from './Home'
import About from './About'
import Events from './Events'
import Resources from './Resources'
import Contact from './Contact'
import {Pages, PageOrder} from './constants'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: Pages.Home,
      beforeNavItems: [],
      afterNavItems: PageOrder.slice(1)
    }
  }

  changePage = ev => {
    let idx = PageOrder.findIndex(page => page === ev.target.dataset.value)
    this.setState({
      beforeNavItems: PageOrder.slice(0, idx + 1),
      afterNavItems: PageOrder.slice(idx + 1),
      page: ev.target.dataset.value
    })
  }

  renderPage = () => {
    switch (this.state.page) {
      case Pages.About:
        return <About />
      case Pages.Events:
        return <Events />
      case Pages.Resources:
        return <Resources />
      case Pages.Contact:
        return <Contact />
      default:
        return <Home />
    }
  }

  renderNavItem = navItem => (
    <NavItem 
      key={`${navItem}`}
      changePage={this.changePage}
      navItem={navItem}
      currentPage={this.state.page}
    />
  )

  render() {
    return (
      <div className="App">
        <div onClick={this.changePage} data-value={Pages.Home} className="logo-container">
          <div className="logo" />
        </div>
        {this.state.beforeNavItems.map(this.renderNavItem)}
        {this.renderPage()}
        {this.state.afterNavItems.map(this.renderNavItem)}        
      </div>
    )
  }
}
