import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class LoginMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: props.activeItem
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.toggleForm()
    }

    render() {
        return(
            <Menu fluid vertical tabular>
                <Menu.Item name='Sign In' active={this.props.activeItem === 'signin'} onClick={this.handleItemClick} />
                <Menu.Item name='Register' active={this.props.activeItem === 'signup'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}