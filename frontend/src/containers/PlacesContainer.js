import React from 'react'
import { Card } from 'semantic-ui-react'
import PlaceCard from '../components/PlaceCard'

export default class PlacesContainer extends React.Component {

    listPlaces = (places, list) => {
        return places.map((place, index) => {
            return <PlaceCard key={index} rank={index + 1} getDirections={this.props.getDirections} {...place} />
        })
    }

    render () {
        return (
            <Card.Group itemsPerRow={2}>
                {this.listPlaces(this.props.places)}
            </Card.Group>
        )
    }
}