import React from 'react'
import { Card, Image, Grid } from "semantic-ui-react";

// export default class PlaceCard extends React.Component {
//     render () {
//         return (
//             <Card>
//                 <Card.Content>
//                     <Card.Header>{this.props.name}</Card.Header>
//                     <Card.Meta>Rating: {this.props.rating}</Card.Meta>
//                     <Card.Meta>Price: {this.props.price_level}</Card.Meta>
//                     <br />
//                 </Card.Content>
//             </Card>
//         )
//     }
// }



const PlaceCard = (props) => {
    return (
        <Grid.Column>
            <Card>
                <Image width='40px' height='40px' src='https://freeiconshop.com/wp-content/uploads/edd/burger-outline-filled.png' />
                <Card.Content>
                    <Card.Header>{props.rank}. {props.name}</Card.Header>
                    <Card.Meta>
                        <span className='rating'>Rating: {props.rating}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='price'>Price: {props.price_level}</span>
                    </Card.Meta>
                </Card.Content>
                <br/>
            </Card>
        </Grid.Column>
    )
}

export default PlaceCard