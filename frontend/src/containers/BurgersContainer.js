import React from 'react'
import PlacesContainer from './PlacesContainer'
import MapContainer from './MapContainer'
import Places from '../api/places'

export default class BurgersContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            places: []
        }
    }

    getPlaces = () => {
        // PLACES API FETCH WILL REPLACE THIS CODE!
        this.setState({
            places: Places.results.slice(0, 8)
        })
    }

    componentDidMount = () => {
        this.getPlaces()
    }

    render() {
        return (
            <div>
                <PlacesContainer address={this.props.location.address} places={this.state.places} />
                <MapContainer coords={this.props.location.coords} places={this.state.places} />
            </div>
        )
    }
}