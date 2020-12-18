import React from 'react'

import '../style/Home.css'
import {HomeText} from '../constants/text'

export default class Home extends React.Component {
    renderSubText = (text) => (
        <div key={text.text} className={`${text.className}`}>{text.text}</div>
    )

    renderText = (text, idx) => (
        <div key={`home-${idx}`} className={`column ${idx === 0 ? 'first' : 'second'}`}>
            {text.map(this.renderSubText)}
        </div>
    )

    render () {
        return (
            <div className="Page">
                <div className="main-container">
                    <div className="logo-container">
                        <div className="logo" />
                    </div>
                    <div className="main-text">
                        {HomeText.map(this.renderText)}
                    </div>
                </div>
            </div>
        )
    }
}
