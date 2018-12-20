import React from 'react'

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
        return (
            <div>
                {this.displayError()}
                <form onSubmit={e => {
                    e.preventDefault()
                    this.props.handleSubmit(this.state)
                }} >
                    <label>Email: </label>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                    <label>Password: </label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                    <button type="submit" >Sign In</button>
                </form>
            </div>
        )
    }
}