import React from 'react'
import {ContactText} from './text'

export default class Contact extends React.Component {
    render () {
        return (
            <div className="contact-container">
                <div className="subheader">Join Us!</div>
                <div className="contact-text">
                    {ContactText}
                </div>

            </div>
        )
    }
}