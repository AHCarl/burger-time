import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import LoginMenu from './LoginMenu'

export default class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            userName: '',
            password: '',
            address: ''
        }
    }

    handleInputChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <LoginMenu activeItem='signup' toggleForm={this.props.toggleForm} ></LoginMenu>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            this.props.handleSubmit(this.state)
                        }} >
                            <Form.Field>
                                <label>Username: </label>
                                <input name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="Username" />
                            </Form.Field>
                            <Form.Field>
                                <label>Address: </label>
                                <input name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="Address" />
                            </Form.Field>
                            <Form.Field>
                                <label>Email: </label>
                                <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password: </label>
                                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                            </Form.Field>
                            <Button type='submit'>Sign Up</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}