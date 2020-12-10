import React from 'react'

import '../style/Resources.css'
import NavItem from './NavItem'
import {Pages} from '../constants/constants'
import {ResourcesText} from '../constants/text'

export default class Resources extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
        }

        this.resourcesEl = React.createRef()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (!prevState.isExpanded && this.state.isExpanded) {
            this.scroll()
        }
    }

    expand = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    renderNavItem = () => (
        <div onClick={this.expand}>
            <NavItem 
                navItem={Pages.Resources}
                isExpanded={this.state.isExpanded}
            />
        </div>
    )

    renderResources = () => (
        <div className="resources-container">
            {ResourcesText.map(this.renderText)}
        </div>
    )

    renderSubText = (text, idx) => (
        <div key={`${text.title}-${idx}`} className="resource-text">
            <div className="microheader">{text.title}</div>
            <div>{text.text}</div>
        </div>
    )

    renderText = (text, idx) => (
        <div key={`resource-column${idx}`} className={`column column${idx}`}>
            <div className="subheader">{idx === 0 ? 'Resources through NYU' : 'Related Articles'}</div>
            {text.map(this.renderSubText)}
        </div>
    )

    scroll = () => {
        let {offsetTop} = this.resourcesEl.current
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }

    render () {
        return (
            <div ref={this.resourcesEl} className="Page">
                {this.renderNavItem()}
                {this.state.isExpanded ? this.renderResources() : null}
            </div>
        )
    }
}
