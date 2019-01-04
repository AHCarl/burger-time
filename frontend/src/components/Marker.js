import React from 'react'
// import { Marker } from 'google-map-react'

export default class Marker extends React.Component {

    render() {
        let width, height;

        if (this.props.img === 'https://static.thenounproject.com/png/710584-200.png') {
            width = '40px'
            height = '40px'
        } else {
            width = "25px";
            height = "25px";
        }

        return (
            <div>
                {this.props.rank}
                <img width={width} height={height} src={this.props.img} alt='burger'/>
            </div>
        )
    }
}