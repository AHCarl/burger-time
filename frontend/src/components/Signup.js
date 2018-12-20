import React from 'react'

export default class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            userName: '',
            password: ''
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
            <form onSubmit={e => {
                e.preventDefault()
                this.props.handleSubmit(this.state)
            }} >
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                <label>Username: </label>
                <input name="userName" value={this.state.userName} onChange={this.handleInputChange} />
                <label>Password: </label>
                <input name="password" value={this.state.password} onChange={this.handleInputChange} />
                <button type="submit" >Sign Up</button>
            </form>
        )
    }
}