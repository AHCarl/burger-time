import React from 'react'
import GoogleMapReact from "google-map-react"
import API_KEY from '../api/API_KEY'
import Marker from '../components/Marker'

export default class MapContainer extends React.Component {

    displayPlaces = (places) => {
        return places.map((place, index) => {
            return <Marker key={index} rank={index + 1} lat={place.geometry.location.lat} lng={place.geometry.location.lng} name={place.name} />;
        })
    }

    render() {
        return (
            <div style={{ height: '80vh', width: '50%', float: 'right', filter: 'drop-shadow(16px 16px 10px black)' }}>
                <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} center={this.props.coords} zoom={14} >
                    {this.displayPlaces(this.props.places)}
                </GoogleMapReact>
            </div>
        )
    }
}