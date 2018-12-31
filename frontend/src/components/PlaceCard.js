import React from 'react'

export default class PlaceCard extends React.Component {
    render () {
        return (
            <div className="card" >{this.props.name}</div>
        )
    }
}