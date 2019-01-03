import React from 'react'

export default class LocationForm extends React.Component {

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

    clearInput = () => {
        this.setState({
            newAddress: ''
        })
    }

    render() {
        return (
            <form className="App" onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state.newAddress);
                this.clearInput()
            }} >
                <label>Change Address:</label>
                <input value={this.state.newAddress} onChange={this.handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}