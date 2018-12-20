import React from 'react'

export default class UserLocation extends React.Component {

    constructor() {
        super()
        this.state = {
            newAddress: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            newAddress: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state);
            }} >
                <label>Change Address:</label>
                <input value={this.state.newAddress} onChange={this.handleInputChange} />
            </form>
        )
    }
}