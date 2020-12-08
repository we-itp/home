import React from 'react'

import {ResourcesText} from './text'

export default class Resources extends React.Component {
    renderText = text => (
        <div key={text.title} className="resource-text">
            <div className="microheader">{text.title}</div>
            <div>{text.text}</div>
        </div>
    )
    render () {
        return (
            <div className="Page">
                <div className="resources-container">
                    <div className="subheader">Resources through NYU</div>
                    {ResourcesText.map(this.renderText)}
                </div>
            </div>
        )
    }
}
