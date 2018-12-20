import React from 'react'

export default class Signout extends React.Component {
    render() {
        return <button onClick={this.props.onClick} >Logout</button>
    }
}