import React from 'react'
// import { Marker } from 'google-map-react'

export default class Marker extends React.Component {
    render() {
        return (
            <div>
                {this.props.rank}
                <img width='20px' height='20px' src='https://freeiconshop.com/wp-content/uploads/edd/burger-outline-filled.png' alt='burger'/>
            </div>
        )
    }
}