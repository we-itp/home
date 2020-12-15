import React from 'react'

import '../style/Contact.css'
import NavItem from './NavItem'

import {ContactText} from '../constants/text'
import {Pages} from '../constants/constants'

const RETURN_KEY = 13

export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            message: '',
            isExpanded: false
        }

        this.contactEl = React.createRef()
        this.emailInputEl = React.createRef()
        this.messageInputEl = React.createRef()
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

    onEnter = ev => {
        if (ev.which === RETURN_KEY) this.sendEmail()
    }

    onInput = ev => {
        this.setState({
            [ev.target.dataset.type]: ev.target.value
        })
    }

    renderContact = () => (
        <div className="contact-container">
            <div className="column0">
                <div className="subheader">Join Us!</div>
                <div className="contact-text">
                    {ContactText.map(this.renderText)}
                </div>
            </div>
            <div className="column1">
                <input 
                    ref={this.emailInputEl} 
                    className="contact-input" 
                    onInput={this.onInput} 
                    data-type="email" 
                    placeholder="Email"></input>
                <input 
                    ref={this.messageInputEl} 
                    className="contact-input" 
                    onInput={this.onInput} 
                    onKeyDown={this.onEnter} 
                    data-type="message" 
                    placeholder="Message"></input>
                <button className="contact-button" onClick={this.sendEmail}>Send</button>
            </div>
        </div>
    )

    renderNavItem = () => (
        <div onClick={this.expand}>
            <NavItem 
                navItem={Pages.Contact}
                isExpanded={this.state.isExpanded}
            />
        </div>
    )

    renderText = text => (
        <div key={`${text}`} className="resource-text">
            {text}
        </div>
    )

    sendEmail = () => {
        console.log(this.state.email, this.state.message)
        this.emailInputEl.current.value = ''
        this.messageInputEl.current.value = ''
    }

    scroll = () => {
        let {offsetTop} = this.contactEl.current
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }

    render () {
        return (
            <div ref={this.contactEl} className="Page">
                {this.renderNavItem()}
                {this.state.isExpanded ? this.renderContact() : null}
            </div>
        )
    }
}
