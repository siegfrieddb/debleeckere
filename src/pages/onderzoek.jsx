import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby"
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
import Gallery from "../components/Gallery/Gallery";
import _ from "lodash";
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
    const frontEdges = this.props.data.frontmatter.edges; 

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
              <MainHeader cover={config.pathPrefix + "/images/onderzoek.jpg"}>
                <MainNav overlay={config.pathPrefix + "/images/onderzoek.jpg"}>
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    { <PageTitle text="Onderzoek" /> /*
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
                  data-offset="-45"
                  spy
                  smooth
                  duration={500}
                >
                  <span className="hidden">Scroll Down</span>
                </Link>
              </MainHeader>
              <PageSection> <div name="content">
              De oude prentkaart van de Dorpsstraat in Sint-Joris-ten-Distel, het dorp waar de wieg stond van 
              Vitalis, toont een eenzame fietser die onderweg is. Dat beeld begeleidt het werk aan het domein Onderzoek.
              De verschillende items vormen onderzoeksvragen waarop een antwoord moet worden gevonden. Dat gebeurt 
              door op weg te gaan naar openbare archieven, beschikbare studies, levende getuigen en online data.
              De verschillende items met hun onderzoeksvragen hebben in de eerste plaats betrekking op 
              de gezinsbiografie van de 37 leden - de drie generaties - van de familie Vitalis De Bleeckere-Octavia Versluys.
              <br></br>
              <br></br>
              De onderzoeksvragen reiken veel verder dan die van het opstellen van de klassieke stamboom. 
              Stambomen kennen enkel een droge opsomming van namen en data. 
              Ze kennen geen gezichten, geen verhalen. Hier primeren de gezichten en de verhalen.
              Het onderzoek is hier een middel om die gezichten en die verhalen te ontdekken,
              ook al blijven de antwoorden op de vragen soms beperkt 
              en is er verder kritisch onderzoek naar relevante bronnen vereist. In de aparte rubriek Bronnen
              worden alle bronnen die een rol spelen in de uitbouw van de site samengebracht en voorgesteld. 
              </div>
              </PageSection>
              <PageSection>
                <Gallery images={_.map(this.props.data.voorgrond.edges, e => e.node.childImageSharp)} 
                         links= {_.map(this.props.data.voorgrond.edges, e => e.node.relativePath.slice(0,-9))} 
                         captions = {_.map(this.props.data.voorgrond.edges, e => {
                          const relpath  = e.node.relativePath.slice(0,-9)
                          var index = _.findIndex(frontEdges, fe => {
                            return fe.node.fileAbsolutePath.indexOf(relpath) !== -1
                          });
                          if (index >=0)
                          { 
                            return frontEdges[index].node.frontmatter.gallerij_titel;
                          }
                          return relpath;
                        })
                      }   
></Gallery>
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
  query IndexOnderzoekQuery {
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
    frontmatter: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/onderzoek/[^/]*/[^/]*index\\.md$/"}})
      {
        totalCount
        edges {
          
          node {
            fileAbsolutePath
            frontmatter {
              gallerij_titel
              
            }
            fields {
              slug
            }
            excerpt
            timeToRead
            tableOfContents
            rawMarkdownBody
          }
        }
      }
    voorgrond : allFile (filter: {absolutePath: {regex: "/onderzoek.*moza\\.jpg/"}} )
    {
      edges {
        node{
          absolutePath 
          relativePath
          childImageSharp {
            
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            } 
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
