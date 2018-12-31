import React from 'react'

export default class PlaceCard extends React.Component {
    render () {
        return (
            <div className="card" >
                <h4>{this.props.name}</h4>
                <p>Rating: {this.props.rating}</p>
                <p>Price: {this.props.price_level}</p>
                <br />
            </div>
        )
    }
}