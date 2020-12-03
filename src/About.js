import React from 'react'

import {AboutText} from './text'

export default class About extends React.Component {
    renderText = text => (
        <div key={text} className="about-text">{text}</div>
    )
    render () {
        return (
            <div className="about-container">
                {AboutText.map(this.renderText)}
            </div>
        )
    }
}
