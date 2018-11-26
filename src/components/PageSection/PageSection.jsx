import React, { Component } from "react";
import "./PageSection.css";

class PageSection extends Component {
  render() {
    
      return (
        <section className="page-section">
          {this.props.children}
        </section>
      );
  
    
    };


}

export default PageSection;
