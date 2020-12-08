import React from 'react'
import {ContactText} from './text'

export default class Contact extends React.Component {
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
                        <input className="contact-input" placeholder="Email"></input>
                        <input className="contact-input" placeholder="Message"></input>
                        <button className="contact-button">Send</button>
                    </div>
                </div>
            </div>
        )
    }
}