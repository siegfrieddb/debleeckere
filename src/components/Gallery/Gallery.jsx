import React, { Component } from "react";
import "./Gallery.css";
import Img from "gatsby-image"
import {Link} from "gatsby"

class Gallery extends Component {
  render() {
    var zipped = _.zip(this.props.images,this.props.links)
    return (
        <div>
            <div className="flex-container-gallery">
            { _.map(zipped, e => {return ( <Link  key={e[1]} to={e[1]} ><Img  className="flex-item-gallery" fixed={e[0].fixed}> </Img></Link>) } ) }
            </div>
        </div>
    );
  }
}


export default Gallery;