import React from 'react'

import {HomeText} from './text'

export default class Home extends React.Component {
    renderText = (text, idx) => (
        <div key={`home-${idx}`} className={`column ${idx === 0 ? 'first' : 'second'}`}>{text.map(this.renderSubText)}</div>
    )
    renderSubText = (text, idx) => (
        <div key={text.text} className={`home-subtext ${text.className}`}>{text.text}</div>
    )
    render () {
        return (
            <div className="main-container">
                <div className="main-text">
                    {HomeText.map(this.renderText)}
                </div>
            </div>
        )
    }
}
