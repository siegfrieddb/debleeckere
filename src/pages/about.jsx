import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Img from "gatsby-image";
import MenuButton from "../components/MenuButton/MenuButton"
import Navigation from "../components/Navigation/Navigation";
import MainNav from "../components/MainNav/MainNav";
import MainHeaderImg from "../components/MainHeaderImg/MainHeaderImg"
import Drawer from "../components/Drawer/Drawer"
import SiteWrapper from "../components/SiteWrapper/SiteWrapper"
class AboutPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
      
        <Helmet title={`About | ${config.siteTitle}`} />
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
        <MainHeaderImg className="post-head"  >
        
        <div style={{display:"flex", maxHeight:"100vh"}} >
          <Img style={{flex:"100% 0 1"}}
            fluid={this.props.data.frontImg.childImageSharp.fluid} />
        </div>
        <MainNav>
        <MenuButton   navigation={config.siteNavigation}
                onClick={this.handleOnClick}/>
        </MainNav>
        </MainHeaderImg>
        </SiteWrapper>
      </Drawer>
    );
  }
}
export const pageQuery = graphql`
  query AboutQuery {
    frontImg: file(relativePath: { eq: "debleeckere.jpg" }) {
      childImageSharp {

        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;
export default AboutPage;
