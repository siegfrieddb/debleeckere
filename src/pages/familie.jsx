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
              <MainHeader cover="/images/familie.jpg">
                <MainNav overlay="/images/familie.jpg">
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    { <PageTitle text="Familie" /> /*
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
              Dit is de familiefoto van het gezin, genomen en samengesteld in de studio Hooft van
Knesselare. Deze foto kreeg een ereplaats in de woonkamers van de gezinsleden. In het
midden staan de ouders, Vital De Bleeckere en Maria Octavia Versluys, omringd door hun tien
volwassen kinderen. Het zijn kloksgewijs Omer, Alfons, Jozef, Maria, Irma, Berta, Albert,
Maurits, Jules, Lea. Die volgorde is niet chronologisch. Het oudste kind was namelijk Jozef, de
derde van de bovenste rij. Ook op de onderste rij staat links Albert voor Maurits, terwijl
Maurits voor Albert geboren is. De chronologische volgorde is dus: Jozef, Maria, Alfons, Omer,
Irma, Berta, Maurits, Albert, Jules en Lea. Op de foto ontbreekt er een kind. Het is Raymond,
het derde kind van het echtpaar Vital-Octavia. Hij is geboren op 30 juli 1909. Hij kwam om het
leven als peuter op 11 mei 1911.
              </PageSection>
              <PageSection>
                <Gallery images={_.map(this.props.data.voorgrond.edges, e => e.node.childImageSharp)} 
                         links= {_.map(this.props.data.voorgrond.edges, e => e.node.relativePath.slice(0,-9))} ></Gallery>
              </PageSection>
              <PaginatedContent
                page={page}
                pages={pages}
                total={total}
                limit={limit}
                prev={prev}
                next={next}
              >
                {/* PostListing component renders all the posts 
                 <PostListing postEdges={nodes} postAuthors={authorsEdges} />
                 */}
              </PaginatedContent>
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
  query Index2Query {
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
    voorgrond : allFile (filter: {absolutePath: {regex: "/persons.*moza\\.jpg/"}} )
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
