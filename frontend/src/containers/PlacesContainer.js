import React from 'react'
import PlaceCard from '../components/PlaceCard'

export default class PlacesContainer extends React.Component {

    listPlaces = (places) => {
        return places.map((place, index) => {
            return <PlaceCard key={index} {...place} />
        })
    }

    render () {
        return (
            <div style={{ height: '80vh', width: '50%', float: 'left', filter: 'drop-shadow(16px 16px 10px black)' }}>
                <div>Burger Content based on: {this.props.address}</div>
                <div className="ui four cards" >{this.listPlaces(this.props.places)}</div>
            </div>   
        )
    }
}