import React, { Component } from "react";
import ImageContainer from './components/ImageContainer';
import PhotoSettingsProvider from "./providers/photoSettings"

export default class App extends Component {
    render() {
        if (this.state && this.state.photos) {
            return (
                <div className="container">
                    <ImageContainer className="left-column" display={this.state.display} photos={this.state.photos.filter(photo => photo.thumbnailSize === "big")}/>
                    <ImageContainer className="right-column" display={this.state.display} photos={this.state.photos.filter(photo => photo.thumbnailSize === "small")}/>
                </div>
            );
        } else {
            return <div/>
        }
    }

    componentWillMount() {
        PhotoSettingsProvider.getPhotoSettings().then(currentPhotos => {
            this.setState({photos: currentPhotos});
        });
    }
}
