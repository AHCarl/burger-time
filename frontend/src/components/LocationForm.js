import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import LocationSearchInput from './LocationSearchInput'

export default class LocationForm extends React.Component {

    constructor() {
        super()
        this.state = {
            newAddress: ''
        }
    }

    handleInputChange = (address) => {
        this.setState({
            newAddress: address
        })
    }

    clearInput = () => {
        this.setState({
            newAddress: ''
        })
    }

    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state.newAddress);
                alert(`Address was changed to: ${this.state.newAddress}`)
                this.clearInput()
                this.props.locationFormToggle()
            }} >
                <Form.Field>
                    <label>Change Address:</label>
                    {/* <input value={this.state.newAddress} onChange={this.handleInputChange} placeholder='Address' /> */}
                    <LocationSearchInput value={this.state.newAddress} onChange={this.handleInputChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}