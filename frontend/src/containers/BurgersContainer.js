import React from 'react'
import PlacesContainer from './PlacesContainer'
import MapContainer from './MapContainer'
import {Grid} from 'semantic-ui-react'
import SideMenu from '../components/SideMenu'
import LocationForm from '../components/LocationForm'

export default class BurgersContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: 'Burger Time'
        }
    }

    locationFormToggle = () => {
        if (this.state.display === 'Burger Time') {
            this.setState({display: 'Change Location'})
        } else {
            this.setState({display: 'Burger Time'})
        }
    }

    render() {
        let mainDisplay;

        if (this.state.display === 'Burger Time') {
            mainDisplay = <PlacesContainer address={this.props.location.address} burgers={this.props.burgers} getDirections={this.props.getDirections} />
        } else {
            mainDisplay = <LocationForm handleSubmit={this.props.patchAddress} locationFormToggle={this.locationFormToggle} />
        }

        return (
            <Grid columns={4}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <SideMenu logout={this.props.logout} activeItem={this.state.display} toggleAddressForm={this.locationFormToggle} ></SideMenu>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {mainDisplay}
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <MapContainer coords={this.props.location.coords} burgers={this.props.burgers} />
                    </Grid.Column>
                    <Grid.Column width={1} />
                </Grid.Row>
            </Grid>
        )
    }
}