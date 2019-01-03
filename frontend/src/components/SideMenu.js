import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class SideMenu extends React.Component {

    state = { activeItem: 'Burger Time' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name === 'Logout') {
            this.props.logout()
        }
    }

    render() {
        const { activeItem } = this.state;

        return(
            <Menu fluid vertical tabular>
                <Menu.Item name='Burger Time' active={activeItem === 'Burger Time'} onClick={this.handleItemClick} />
                <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}