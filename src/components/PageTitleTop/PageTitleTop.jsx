import React from "react";
import "./PageTitleTop.css";

class PageTitleTop extends React.Component {
  render() {
    const { text } = this.props;
   
      return <div className="page-title-container-2"><h1 className="page-title-2">{text}</h1></div>;
   
  }
}

export default PageTitleTop;
