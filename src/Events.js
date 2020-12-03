import React from 'react'

const EventsList = [
    {
        title: 'Megan Bowker, COLLINS',
        date: 'Nov 12, 2020',
        time: '4:30pm EST',
        link: '',
        photo: 'https://sues-website.s3.us-east-2.amazonaws.com/ezgif+1.png'
    },
    {
        title: 'Megan Bowker, COLLINS',
        date: 'Nov 12, 2020',
        time: '4:30pm EST',
        link: '',
        photo: 'https://sues-website.s3.us-east-2.amazonaws.com/ezgif+1.png'
    },
    {
        title: 'Megan Bowker, COLLINS',
        date: 'Nov 12, 2020',
        time: '4:30pm EST',
        link: '',
        photo: 'https://sues-website.s3.us-east-2.amazonaws.com/ezgif+1.png'
    },
    {
        title: 'Megan Bowker, COLLINS',
        date: 'Nov 12, 2020',
        time: '4:30pm EST',
        link: '',
        photo: 'https://sues-website.s3.us-east-2.amazonaws.com/ezgif+1.png'
    }
]

export default class Events extends React.Component {
    renderEvent = event => (
        <div className="event-container">
            <img alt="event for weitp" src={event.photo}></img>
            <div className="event-date">
                {event.date} @ {event.time}
            </div>
            <div className="link"><a href={event.link}>Register</a></div>
        </div>
    )
    render () {
        return (
            <div className="events-container">
                {EventsList.map(this.renderEvent)}
            </div>        
        )
    }
}