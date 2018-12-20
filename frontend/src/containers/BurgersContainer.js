import React from 'react'

export default class BurgersContainer extends React.Component {
    render() {
        return (
            <div>
                <p>Burger Content based on: {this.props.location.address}</p>
            </div>
        )
    }
}