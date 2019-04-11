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
    var imgHeader = (<div></div>)
    if (fluid != null)
    {
      imgHeader = (<Img  fluid={fluid}  className={"main-header-img"}   ></Img>)
    }
  

    return (
      <header className={classes} >
        {imgHeader}
        {children}
      </header>
    );
  }
}

export default MainHeader;
