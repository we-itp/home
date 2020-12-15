import React from 'react'

import '../style/NavItem.css'

export default class NavItem extends React.Component {
    constructor(props) {
        super(props)

        this.elementRef = React.createRef()
    }

    render = () => (
        <div ref={this.elementRef} className={`nav-item ${this.props.navItem.toLowerCase()}`}>
            <div className="nav-plus">{this.props.isExpanded ? '-' : '+'}</div>
            {this.props.navItem}
        </div>
    )

    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.isExpanded && this.props.isExpanded) {
            this.scroll()
        }
    }

    scroll = () => {
        let {offsetTop} = this.elementRef.current
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
}
