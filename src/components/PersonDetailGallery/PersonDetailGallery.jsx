import React, { Component } from "react";
import "../Gallery/Gallery.css";
import Img from "gatsby-image"
import {Link} from "gatsby"
import _ from "lodash";

class PersonDetailGallery extends Component {
  render() {


    
    var zipped = _.zip(this.props.images,this.props.links,this.props.captions)
    zipped = _.sortBy(zipped, 2)
    zipped = _.map(zipped, (ar) => { return [ar[0],ar[1],  ar[2].substring(2) ] })
    return (
        <div>
            <div className="flex-container-gallery">
            { _.map(zipped, e => {return ( <Link  className="flex-item-gallery" key={e[1]} to={e[1]} ><Img     fixed={e[0].fixed}> </Img><span className="flex-item-gallery-span">{e[2]}</span></Link>) } ) }
            </div>
        </div>
    );
  }
}


export default PersonDetailGallery;