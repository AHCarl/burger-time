import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class SideMenu extends React.Component {

    state = { activeItem: 'Burger Time' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })

        switch(name) {
            case ('Logout'):
                this.props.logout()
                break;
            case ('Change Address'):
                this.props.toggleAddressForm()
                break;
            case ('Burger Time'):
                this.props.toggleAddressForm()
                break;
        }
    }

    render() {
        const { activeItem } = this.state;

        return(
            <Menu fluid vertical tabular>
                <Menu.Item name='Burger Time' active={activeItem === 'Burger Time'} onClick={this.handleItemClick} />
                <Menu.Item name='Change Address' active={activeItem === 'Change Address'} onClick={this.handleItemClick} />
                <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}