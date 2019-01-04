import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import LoginMenu from './LoginMenu'

export default class Signin extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    displayError = () => {
        return this.props.error && <p>{this.props.error}</p>
    }

    render() {
        // return (
        //     <div>
        //         {this.displayError()}
        //         <form onSubmit={e => {
        //             e.preventDefault()
        //             this.props.handleSubmit(this.state)
        //         }} >
        //             <label>Email: </label>
        //             <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
        //             <label>Password: </label>
        //             <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
        //             <button type="submit" >Sign In</button>
        //         </form>
        //     </div>
        // )

        return (
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <LoginMenu form='signin' toggleForm={this.props.toggleForm} ></LoginMenu>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {this.displayError()}
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            this.props.handleSubmit(this.state)
                        }} >
                            <Form.Field>
                                <label>Email: </label>
                                <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password: </label>
                                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                            </Form.Field>
                            <Button type='submit'>Sign In</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}