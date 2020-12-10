import React from 'react'

import '../style/NavItem.css'

export default class NavItem extends React.Component {
    render = () => (
        <div className={`nav-item ${this.props.navItem.toLowerCase()}`}>
            <div className="nav-plus">{this.props.isExpanded ? '-' : '+'}</div>
            {this.props.navItem}
        </div>
    )
}
