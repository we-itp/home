import React from 'react'
import './Navbar.css'

import {Pages} from './constants'

export default class Navbar extends React.Component {
    renderNavItem = navItem => (
        <div className="nav-item"
            key={`${navItem}`}
            onClick={this.props.changePage}
            data-value={navItem}
        >{navItem}</div>
    )
    render() {
        return (
            <div className="Navbar">
                {Object.values(Pages).map(this.renderNavItem)}
            </div>
        )
    }
}
