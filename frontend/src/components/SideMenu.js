import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: props.activeItem
        }
    }

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
        return(
            <Menu fluid vertical tabular>
                <Menu.Item name='Burger Time' active={this.props.activeItem === 'Burger Time'} onClick={this.handleItemClick} />
                <Menu.Item name='Change Address' active={this.props.activeItem === 'Change Address'} onClick={this.handleItemClick} />
                <Menu.Item name='Logout' active={this.props.activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}