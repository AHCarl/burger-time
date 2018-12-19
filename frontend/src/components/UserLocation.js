import React from 'react'

export default class UserLocation extends React.Component {

    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state.input);
            }} >
                <label>Change Address:</label>
                <input value={this.state.input} onChange={this.handleInputChange} />
            </form>
        )
    }
}