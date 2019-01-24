import React, { Component } from "react";
import "./PageDocSection.css";

class PageDocSection extends Component {
  render() {
    
      return (
        <section className="page-doc-section">
          {this.props.children}
        </section>
      );
  
    
    };


}

export default PageDocSection;
