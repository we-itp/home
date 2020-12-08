import React from 'react'

import {ResourcesText} from './text'

export default class Resources extends React.Component {
    renderText = (text, idx) => (
        <div key={`resource-column${idx}`} className={`column column${idx}`}>
            <div className="subheader">{idx === 0 ? 'Resources through NYU' : 'Related Articles'}</div>
            {text.map(this.renderSubText)}
        </div>
    )

    renderSubText = (text, idx) => (
        <div key={`${text.title}-${idx}`} className="resource-text">
            <div className="microheader">{text.title}</div>
            <div>{text.text}</div>
        </div>
    )

    render () {
        return (
            <div className="Page">
                <div className="resources-container">
                    {ResourcesText.map(this.renderText)}
                </div>
            </div>
        )
    }
}
