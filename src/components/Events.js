import React from 'react'

import '../style/Events.css'
import NavItem from './NavItem'

import {EventsList} from '../constants/events'
import {Pages} from '../constants/constants'

export default class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
        }

        this.eventsEl = React.createRef()
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

    renderEvent = (event, idx) => (
        <div key={`${event.title}-${idx}`} className="event-container">
            <img alt="event for weitp" src={event.photo}></img>
            <div className="event-date">{event.title}</div>
            <div className="event-date">
                {event.date} @ {event.time}
            </div>
            <div className="link"><a href={event.link}>Register</a></div>
        </div>
    )

    renderEvents = () => (
        <div className="events-container">
            {EventsList.map(this.renderEvent)}
        </div>
    )

    renderNavItem = () => (
        <div onClick={this.expand}>
            <NavItem 
                navItem={Pages.Events}
                isExpanded={this.state.isExpanded}
            />
        </div>
    )

    scroll = () => {
        let {offsetTop} = this.eventsEl.current
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }

    render () {
        return (
            <div ref={this.eventsEl} className="Page">
                {this.renderNavItem()}
                {this.state.isExpanded ? this.renderEvents() : null}
            </div>
        )
    }
}
