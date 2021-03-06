import React from 'react'
import GoogleMapReact from "google-map-react"
import API_KEY from '../api/API_KEY'
import Marker from '../components/Marker'

export default class MapContainer extends React.Component {

    displayPlaces = (places) => {
        return places.map((place, index) => {
            return <Marker key={index} rank={index + 1} lat={place.location.lat} lng={place.location.lng} name={place.name} img="https://freeiconshop.com/wp-content/uploads/edd/burger-outline-filled.png" />;
        })
    }

    displayUserLocation = (coords) => {
        return coords.lat !== 0 && coords.lng !== 0 && <Marker lat={coords.lat} lng={coords.lng} img="https://static.thenounproject.com/png/710584-200.png" />;
    }

    render() {
        console.log(this.props)
        return (
            <div style={{ height: '80vh', width: '100%', float: 'right', filter: 'drop-shadow(8px 8px 10px black)' }}>
                <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} center={this.props.coords} zoom={14} >
                    {this.displayPlaces(this.props.burgers)}
                    {this.displayUserLocation(this.props.coords)}
                </GoogleMapReact>
            </div>
        )
    }
}