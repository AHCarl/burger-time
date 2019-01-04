import React from 'react'
import { Form, Button } from 'semantic-ui-react'

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
            <Form onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(this.state.newAddress);
                this.clearInput()
            }} >
                <Form.Field>
                    <label>Change Address:</label>
                    <input value={this.state.newAddress} onChange={this.handleInputChange} placeholder='Address' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}