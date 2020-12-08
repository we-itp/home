import React from 'react'

import {AboutText} from './text'

export default class About extends React.Component {
    renderText = (text, idx) => (
        <div className="about-text" key={`${text}-${idx}`}>{text}</div>
    )
    render () {
        return (
            <div className="Page">
                <div className="about-container">
                    {AboutText.map(this.renderText)}
                </div>
            </div>
        )
    }
}
