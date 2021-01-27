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
    }

    expand = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    renderEvent = (event, idx) => (
        <div key={`${event.title}-${idx}`} className="event-container">
            <img className="event-img" alt="event for weitp" src={process.env.PUBLIC_URL + event.photo}></img>
            <div className="event-date">{event.title}</div>
            <div className="event-date">
                {event.date} @ {event.time}
            </div>
            {!event.archived ? <div className="link"><a href={event.link}>Register</a></div> : null}
        </div>
    )

    renderEvents = () => (
        <div className="events-container">
            <div className="event-scroll">
                {EventsList.map(this.renderEvent)}
            </div>
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

    render () {
        return (
            <div className="Page">
                {this.renderNavItem()}
                {this.state.isExpanded ? this.renderEvents() : null}
            </div>
        )
    }
}
