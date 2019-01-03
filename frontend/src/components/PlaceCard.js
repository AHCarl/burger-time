import React from 'react'
import { Card, Image, Button } from "semantic-ui-react";

export default class PlaceCard extends React.Component {

    handleClick = (e) => {
        e.persist()
        this.props.getDirections(e.target.name)
    }

    render () {
        return (
            <Card>
                <Image width='40px' height='40px' src='https://freeiconshop.com/wp-content/uploads/edd/burger-outline-filled.png' />
                <Card.Content>
                    <Card.Header>{this.props.rank}. {this.props.name}</Card.Header>
                    <Card.Meta>
                        <span className='rating'>Rating: {this.props.rating}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='price'>Price: {'$$$$'.slice(0, this.props.price_level)}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Button basic color='green' name={this.props.name} onClick={(e) => this.handleClick(e)}>Get Directions</Button>
                </Card.Content>
            </Card>
        )
    }
}