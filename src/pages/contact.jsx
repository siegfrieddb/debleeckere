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
import PageSection from "../components/PageSection/PageSection"
import { Link } from "react-scroll"
class ContactPage extends Component {
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
      
        <Helmet title={`Contact | ${config.siteTitle}`} />
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
        <div className="vertical overlay-arrow">
                  <div className="main-header-content inner">
                    {/* <PageTitle text={config.siteTitle} />
                    <PageDescription text={config.siteDescription} />
                    <SocialMediaIcons
                      urls={config.siteSocialUrls}
                      color="currentColor"
                    /> */
                      }
                  </div>
                </div>
                <Link
                  className="scroll-down icon-arrow-left"
                  to="content"
                  
                  spy
                  smooth
                  duration={500}
                >
                  <span className="hidden">Scroll Down</span>
                </Link>
        </MainHeaderImg>
        <PageSection>
              <div name="content">
              Indien u contact wenst te nemen. 
              </div>
              </PageSection>
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
export default ContactPage;
