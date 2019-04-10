import React from "react";
import "./PageTitleInline.css";

class PageTitleInline extends React.Component {
  render() {
    const { text } = this.props;
    if (text == "Bakermat")
    {
      return <div className="page-title-container"> <h1 className="page-title page-title-collored">{text}</h1></div>;
    }
    else if (text) {
      return <div className="page-title-container"><h1 className="page-title">{text}</h1></div>;
    }
    return null;
  }
}

export default PageTitleInline;
