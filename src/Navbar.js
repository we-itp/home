import React from 'react'

import {Pages} from './constants'

export default class Navbar extends React.Component {
    renderNavItem = navItem => (
        <div className={`${navItem === Pages.Home ? 'logo' : ''} nav-item`}
            key={`${navItem}`}
            onClick={this.props.changePage}
            data-value={navItem}
        >{navItem === Pages.Home ? "" : navItem}</div>
    )
    render() {
        return (
            <div className="Navbar">
                {Object.values(Pages).map(this.renderNavItem)}
            </div>
        )
    }
}
