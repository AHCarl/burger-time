import React from 'react'
import PlacesContainer from './PlacesContainer'
import MapContainer from './MapContainer'
import {Grid} from 'semantic-ui-react'
import Places from '../api/places'
import SideMenu from '../components/SideMenu'

export default class BurgersContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            places: []
        }
    }

    getPlaces = () => {
        // PLACES API FETCH WILL REPLACE THIS CODE!
        this.setState({
            places: Places.results.slice(0, 6)
        })
    }

    componentDidMount = () => {
        this.getPlaces()
    }

    render() {
        return (
            <Grid columns={4}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <SideMenu logout={this.props.logout} ></SideMenu>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <PlacesContainer address={this.props.location.address} places={this.state.places} getDirections={this.props.getDirections} />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <MapContainer coords={this.props.location.coords} places={this.state.places} />
                    </Grid.Column>
                    <Grid.Column width={1} />
                </Grid.Row>
            </Grid>
        )
    }
}