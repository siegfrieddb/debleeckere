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
              <MainHeader cover="/images/kn.jpg">
                <MainNav overlay="/images/kn.jpg">
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    { <PageTitle text="Bakermat" /> /*
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
              <PageSection>
              <div name="content">
              Het domein Bakermat geeft een concreet beeld van een specifieke grensstreek
               tussen Oost- en West-Vlaanderen. Het betreft de grensstreek tussen het zuidelijkste deel
                van wat men het groene Brugse Ommeland noemt, met name de zuidoostelijke rand 
                ervan met de vroegere dorpskernen Sint-Joris-ten-Distel,
                 Oedelem en Beernem ― vandaag de fusiegemeente Beernem ― en
                  het Oost-Vlaamse Zuid-Meetjesland, met de vroegere dorpskernen Knesselare
                   en Sint-Maria-Aalter ― vandaag allebei behorend tot de fusiegemeente Aalter.
                   <br/>
                   <br/>
                   In deze unieke streek situeert zich de familie Vitalis De Bleeckere-Octavia Versluys.
                    Vitalis is geboren en opgegroeid in Sint-Joris-ten-Distel, 
                    terwijl het leven van Octavia Versluys zich van geboorte
                     tot dood heeft afgespeeld in Knesselare. Vitalis en Octavia
                      woonden met hun gezin te Knesselare.
                       Al hun kinderen zijn daar geboren en opgegroeid.
                        De meesten zijn ook daar nadien blijven wonen.
                         Dat geldt voor Jozef, Maria, Alfons, Omer, 
                         Irma en Berta; Jules woonde in Buntelare waar
                          Knesselare grenst aan Aalter-Brug; Maurits en
                           Albert woonden elk na hun huwelijk eerst enige tijd in 
                           Knesselare, daarna vestigden ze zich definitief aan de rand van Sint-Maria-Aalter, 
                           direct aan de grens met Zuid-Knesselare.
                           <br/>
                           <br/>
                           Allen waren ze gewone mensen wier leven sterk werd bepaald door hun directe omgeving.
                            Het sociale en culturele leven, 
                            de taal, de geschiedenis en de geografie van de streek kleurden
                             het dagelijkse leven van hun gezin en hun familie. 
                             In het domein Bakermat passeren diverse facetten van 
                             die streek de revue, telkens belicht vanuit de familie
                              en het gezin van Vitalis en Octavia. 
                  <h1></h1>
              </div>
              </PageSection>
              <PageSection>
                <Gallery images={_.map(this.props.data.voorgrond.edges, e => e.node.childImageSharp)} 
                         links= {_.map(this.props.data.voorgrond.edges, e => e.node.relativePath.slice(0,-14))} ></Gallery>
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
  query IndexBakermatQuery {
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
    voorgrond : allFile (filter: {absolutePath: {regex: "/bakermat.*voorgrond\\.jpg/"}} )
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
