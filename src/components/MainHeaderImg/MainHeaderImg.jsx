import React from "react";
import classNames from "classnames";
import "./MainHeaderImg.css";
import Img from "gatsby-image"

class MainHeader extends React.Component {
  render() {
    const { children, fluid } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !fluid
    });


    return (
      <header>
        
          <Img  fluid={fluid}  style={{maxHeight: "400px"}}>
        
        </Img>
        
        {children}
      </header>
    );
  }
}

export default MainHeader;
