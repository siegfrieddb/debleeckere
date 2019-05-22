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
import MainHeader2 from "../components/MainHeader2/MainHeader2";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
import Img from "gatsby-image"
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
              
              <MainHeader2 cover={this.props.data.frontImg.childImageSharp} noscale style={{"backgroundColor":"#9ACCCD"}}>
                <MainNav >
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
              </MainHeader2>
              <PageSection >
              <div id="content" style={{paddingTop:30}}>
              Welkom op de site van familie Vitalis De Bleeckere - Octavia Versluys.
              Ze is online sinds eind april 2019 en bevat vier domeinen.
              Het domein <b>Familie</b> stelt de 37 personen voor, die samen de drie generaties van de familie vormen.
              In de tijd gezien, situeren ze zich in het laatste kwart van de negentiende eeuw, de volledige twintigste eeuw 
              en in de eerste helft van de eenentwintigste eeuw. 
              <br/>
              <br/>
              Officiële stukken, beelden en teksten, bevinden zich in het domein <b>Documenten</b>. 
              Er gebeurt ook onderzoek naar de familie en haar omgeving in tijd en ruimte. Dat gebeurt in het domein <b>Onderzoek</b>. Het biedt
              een platform om op bepaalde aspecten van de familie en haar omgeving dieper in te gaan. Dat domein is nauw verwant
              aan het domein <b>Bakermat</b>. Dat belicht thema's die betrekking hebben op de historische, 
              geografische en maatschappelijke context van de familie. 
               <br/>
               <br/>
               De site kan relevant zijn voor derden want alle domeinen
               ontspringen aan de wil om hulde te brengen aan een familie van gewone, eenvoudige Vlaamse mensen,
               die door hard en eerlijk werken stand hebben gehouden doorheen de hevige stormen van het leven en de tijd.
               De site benadert de familie De Bleeckere-Versluys ook als een concrete tijdspiegel en levensspiegel.       
               <br/>
               <br/>
               Deze site is als een gebouw waaraan permanent wordt gewerkt. De ruwbouw is af. De concrete invulling
               van de diverse verdiepingen - de vier domeinen - met hun vele kamers, 
               verloopt op het ritme van weken, maanden en jaren.
              <br/>
              <br/>
              Wenst u op de hoogte te blijven van de verdere ontwikkeling van de site, <GatsbyLink to="contact">zie bij Contact</GatsbyLink>.
              <br/>
               <br/>
              <div style={{"textAlign": "center"}}>
                <br/>
                <span style=”color:blue”><i>I tell, therefore you are. (Margeret Atwood)</i></span>
                <br/>
                <br/>
                <span style=”color:blue”><i>Generaties - ze verschijnen en verdwijnen.<br/> 
                Vormen ze niet de rijmen<br/> 
                van de geheimen<br/>
                eigen aan ons reilen en zeilen<br/>
                hier op aarde? (Sylvain De Bleeckere)</i></span>
                <br/><br/>
                <br/><br/>
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
    frontImg: file(relativePath: { eq: "debleeckere.jpg" }) {
      childImageSharp {

        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;

export default IndexTemplate;
