import React from 'react'

import {HomeText} from './text'

export default class Home extends React.Component {
    render () {
        return (
            <div className="main-container">
                <div className="header">weITP</div>
                <div className="main-text">
                    {HomeText}
                </div>
            </div>
        )
    }
}
