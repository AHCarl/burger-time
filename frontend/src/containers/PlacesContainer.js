import React from 'react'
import { Grid } from 'semantic-ui-react'
import PlaceCard from '../components/PlaceCard'

export default class PlacesContainer extends React.Component {

    listPlaces = (places) => {
        return places.map((place, index) => {
            return <PlaceCard key={index} {...place} />
        })
    }

    render () {
        return (
            <div style={{ height: '80vh', width: '50%', float: 'left', filter: 'drop-shadow(16px 16px 10px black)' }}>
                <Grid columns={3} divided>
                    <Grid.Row>
                        {this.listPlaces(this.props.places.slice(0, 3))}
                    </Grid.Row>
                    <Grid.Row>
                        {this.listPlaces(this.props.places.slice(3))}
                    </Grid.Row>
                </Grid>
            </div>   
        )
    }
}