import React from 'react'
import {ContactText} from './text'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            message: ''
        }

        this.emailInputEl = React.createRef()
        this.messageInputEl = React.createRef()
    }

    onInput = ev => {
        this.setState({
            [ev.target.dataset.type]: ev.target.value
        })
    }

    onEnter = ev => {
        if (ev.which === 13) this.sendEmail()
    }

    sendEmail = () => {
        console.log(this.state.email, this.state.message)
        this.emailInputEl.current.value = ''
        this.messageInputEl.current.value = ''
    }

    renderText = text => (
        <div key={`${text}`} className="resource-text">
            {text}
        </div>
    )

    render () {
        return (
            <div className="Page">
                <div className="contact-container">
                    <div className="column0">
                        <div className="subheader">Join Us!</div>
                        <div className="contact-text">
                            {ContactText.map(this.renderText)}
                        </div>
                    </div>
                    <div className="column1">
                        <input ref={this.emailInputEl} className="contact-input" onInput={this.onInput} data-type="email" placeholder="Email"></input>
                        <input ref={this.messageInputEl} className="contact-input" onInput={this.onInput} onKeyDown={this.onEnter} data-type="message" placeholder="Message"></input>
                        <button className="contact-button" onClick={this.sendEmail}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}