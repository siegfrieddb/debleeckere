import React from "react";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { text } = this.props;
    if (text == "Bakermat")
    {
      return <h1 className="page-title page-title-collored">{text}</h1>;
    }
    else if (text) {
      return <h1 className="page-title">{text}</h1>;
    }
    return null;
  }
}

export default PageTitle;
