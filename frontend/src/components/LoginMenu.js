import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class LoginMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: (props.form === 'signin') ? 'signin' : 'signup'
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.toggleForm(name)
    }

    render() {
        const { activeItem } = this.state;

        return(
            <Menu fluid vertical tabular>
                <Menu.Item name='Sign In' active={activeItem === 'signin'} onClick={this.handleItemClick} />
                <Menu.Item name='Register' active={activeItem === 'signup'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}