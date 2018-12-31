import React from 'react'
import GoogleMapReact from "google-map-react"
import API_KEY from '../api/API_KEY'

export default class MapContainer extends React.Component {
    render() {
        return (
            <div style={{ height: '80vh', width: '50%', float: 'right', filter: 'drop-shadow(16px 16px 10px black)' }}>
                <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} center={this.props.coords} zoom={14} />
            </div>
        )
    }
}