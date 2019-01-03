import React from 'react'

export default class Signout extends React.Component {
    render() {
        return (
            <div className="App">
                <button onClick={this.props.onClick}>
                    Logout
                </button>
            </div>
        )
    }
}