import React from 'react'

import '../style/About.css'
import NavItem from './NavItem'
import {AboutText} from '../constants/text'
import { Pages } from '../constants/constants'

export default class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: false
        }
    }

    expand = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    renderAbout = () => (
        <div className="about-container">
            <div className="column">{AboutText.map(this.renderText)}</div>
        </div>
    )

    renderNavItem = () => (
        <div onClick={this.expand}>
            <NavItem 
                navItem={Pages.About}
                isExpanded={this.state.isExpanded}
            />
        </div>
    )

    renderText = (text, idx) => (
        <div className="about-text" key={`${text}-${idx}`}>{text}</div>
    )

    render () {
        return (
            <div className="Page">
                {this.renderNavItem()}
                {this.state.isExpanded ? this.renderAbout() : null}
            </div>
        )
    }
}
