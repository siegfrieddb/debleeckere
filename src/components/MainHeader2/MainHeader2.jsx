import React from "react";
import classNames from "classnames";
import "./MainHeader2.css";
import Img from "gatsby-image"

class MainHeader2 extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    
//<header className={classes}>
      
    return (
        
      <div className={classes}  style={{display:"flex", maxHeight:"100vh"}} >
        <Img style={{flex:"100% 0 1"}}
          fluid={this.props.cover.fluid} />
      {children}
      </div>
    );
  }
}



export default MainHeader2;
