import React, { Component } from "react";
import Image from "./Image";

export default class ImageContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let photos = this.props.photos.map(photo => {
            return <Image key={Math.random()} photo={photo}/>
        });
        return (
          <div className ={this.props.className}>
                {photos}
          </div>
        );
    }
}
