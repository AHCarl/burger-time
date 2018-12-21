import React from 'react'
import GoogleMapReact from 'google-map-react'
import API_KEY from '../api/API_KEY'

export default class BurgersContainer extends React.Component {
    render() {
        return (
            <div>
                <p>Burger Content based on: {this.props.location.address}</p>
                <div style={{ height: '80vh', width: '50%', float: 'right' }}>
                    <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} defaultCenter={this.props.location.coords} defaultZoom={14} />
                </div>
            </div>
        )
    }
}