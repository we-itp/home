import React from 'react'

import {Pages} from './constants'

export default class NavItem extends React.Component {
    render() {
        let {navItem} = this.props
        if (navItem === Pages.Home) return null
        return (
            <div className={`nav-item ${navItem.toLowerCase()}`}
                onClick={this.props.changePage}
                data-value={navItem}
            >
                <div className="nav-plus">{navItem === this.props.currentPage ? '-' : '+'}</div>
                {navItem}
            </div>
        )
    }
}
