import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";

import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import PageSection from "../components/PageSection/PageSection";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
import "./index.css"
class IndexTemplate extends React.Component {
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
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pageContext;
    const authorsEdges = this.props.data.authors.edges;

    return (
      <Layout location={this.props.location}>
        <Drawer className="home-template" isOpen={this.state.menuOpen}>
          <Helmet title={config.siteTitle} />
          <SEO postEdges={nodes} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="home-template">
              {/* The big featured header */}
              <MainHeader cover={config.siteCover}>
                <MainNav overlay={config.siteCover}>
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
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
                  data-offset="+1000"
                  spy
                  smooth
                  duration={500}
                >
                  <span className="hidden">Scroll Down</span>
                </Link>
              </MainHeader>
              <PageSection >
              <div id="content">
              Welkom op de site van familie Vitalis De Bleeckere - Octavia Versluys. 
              De rubriek Familie handelt over de drie generaties van de familie. 
              Onder de rubriek Documenten staan officië le documenten. 
              De rubriek Onderzoek bouwt een forum uit voor onderzoek naar de familie. 
              De rubriek Bakermat bevat thema's die de historische, geografische en maatschappelijke context belichten.
              <br/><br/>
              <div style={{"textAlign": "center"}}>Citaat
                <br/>
                
                <i>I tell, therefore you are. (Margeret Atwood)</i>
                <br/>
                <i>Generaties komen en gaan<br/> als golven van ons bestaan. (Sylvain De Bleeckere)</i>
                <br/><br/>
                </div>
                <div className="menu-bar">
                  <span><GatsbyLink to=".\familie">Familie</GatsbyLink></span>
                  <span><GatsbyLink to=".\bakermat">Bakermat</GatsbyLink></span>
                  <span><GatsbyLink to=".\documenten">Documents</GatsbyLink></span>
                  <span><GatsbyLink to=".\onderzoek">Onderzoek</GatsbyLink></span>
                </div>
                </div>
              </PageSection>
              
            </div>

            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
