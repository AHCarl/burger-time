import React from 'react'
import { Grid } from 'semantic-ui-react'
import PlaceCard from '../components/PlaceCard'

export default class PlacesContainer extends React.Component {

    listPlaces = (places, list) => {
        return places.map((place, index) => {
            return <PlaceCard key={index} rank={(index + 1) + list * 3} {...place} />
        })
    }

    render () {
        return (
            <div style={{ height: '80vh', width: '50%', float: 'left' }}>
                <Grid columns={3} divided>
                    <Grid.Row>
                        {this.listPlaces(this.props.places.slice(0, 3), 0)}
                    </Grid.Row>
                    <Grid.Row>
                        {this.listPlaces(this.props.places.slice(3), 1)}
                    </Grid.Row>
                </Grid>
            </div>   
        )
    }
}