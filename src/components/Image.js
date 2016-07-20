import React, {Component} from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photo = this.props.photo,
        currentSrcs = photo.images,
        imgBaseUrl = photo.settings.basepath + "images/",
        srcSet = {
            wide: imgBaseUrl + currentSrcs.wide.url,
            desktop: imgBaseUrl + currentSrcs.desktop.url,
            tablet: imgBaseUrl + currentSrcs.tablet.url,
            phone: imgBaseUrl + currentSrcs.phone.url
        };

    return (
      <picture width="100%">
        <source
            media="(min-width: 1240px)"
            srcSet={srcSet.wide}/>
        <source
            media="(min-width: 990px)"
            srcSet={srcSet.desktop}/>
        <source
            media="(min-width: 780px)"
            srcSet={srcSet.tablet}/>
        <img
            src={srcSet.phone}
            srcSet={srcSet.phone}/>
      </picture>
    );
  }
}

export default Image;
