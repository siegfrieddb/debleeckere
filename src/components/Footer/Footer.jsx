import React, { Component } from "react";
import {  Link as GatsbyLink } from "gatsby";
import "./Footer.css";

class Footer extends Component {
  render() {
    const PoweredBy = props => {
      const { show } = props;
      if (show) {
        return (
          <section className="poweredby">
            Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
          </section>
        );
      }
      return null;
    };

    const { promoteGatsby } = this.props;
    const { label, url, year } = this.props.copyright;
    return (
      <div>
        <div className="menu-bar">
                  <span><GatsbyLink to="familie">Familie</GatsbyLink></span>
                  <span><GatsbyLink to="bakermat">Bakermat</GatsbyLink></span>
                  <span><GatsbyLink to="documenten">Documenten</GatsbyLink></span>
                  <span><GatsbyLink to="onderzoek">Onderzoek</GatsbyLink></span>
                  <span><GatsbyLink to="contact">Contact</GatsbyLink></span>
        </div>
        <footer className="site-footer clearfix">
          <section className="copyright">
            <a href={url || "/"}>{label}</a> &copy;{" "}
            {year || new Date().getFullYear()}
          </section>
          <PoweredBy show={promoteGatsby} />
        </footer>
      </div>
    );
  }
}

export default Footer;
