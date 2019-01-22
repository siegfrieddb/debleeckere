import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainHeaderImg from "../components/MainHeaderImg/MainHeaderImg";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainContent from "../components/MainContent/MainContent";
import PostHeader from "../components/PostHeader/PostHeader";
import PostFormatting from "../components/PostFormatting/PostFormatting";
import PostDate from "../components/PostDate/PostDate";
import PostFooter from "../components/PostFooter/PostFooter";
import PageSection from "../components/PageSection/PageSection"
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import PostShare from "../components/PostShare/PostShare";
import GhostSubscribe from "../components/GhostSubscribe/GhostSubscribe";
import ReadNext from "../components/ReadNext/ReadNext";
import PostTags from "../components/PostTags/PostTags";
import ReadParents from "../components/ReadParents/ReadParents"
import Footer from "../components/Footer/Footer";
import AuthorModel from "../models/author-model";
import Disqus from "../components/Disqus/Disqus";
import Layout from "../components/layout";
import Img from "gatsby-image"


class DocTemplate extends React.Component {
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
    const { location, data } = this.props;
	  const { slug, voorgrond,achtergrond } = this.props.pageContext;
    const doc = this.props.data.markdownRemark;
    const { date, author } = doc;

    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    );
      console.log(date)
    return (
  	<Layout location={this.props.location}>
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${slug}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={doc} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />
        
        <SiteWrapper>
          <MainHeaderImg className="post-head" fluid={this.props.data.backImg.edges[0].node.childImageSharp.fluid} >
            <MainNav>
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
            
            
          </MainHeaderImg>
          <MainContent>
            <PostFormatting className={"persoon"}>
              <PageSection>
                <section  className="post-content"
                dangerouslySetInnerHTML={{ __html: doc.html }}></section>
              </PageSection>
               
              <PostFooter>
                {/*
                <AuthorImage author={authorData} />
                <AuthorInfo prefix="/author" author={authorData} />
                <PostShare
                  postNode={persoon}
                  postPath={location.pathname}
                  config={config}
                />
                <GhostSubscribe />
                */}
              </PostFooter>
            </PostFormatting>
          </MainContent>
          
          
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
  query DocBuySlug($slug: String!, $voorgrond: String, $achtergrond : String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        date
        author
      }
      fields {
        slug
      }
    }
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
    backImg: allFile(filter : {relativePath: {eq: $achtergrond }}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            } 
            fluid( duotone: { highlight: "#FFFDEE", shadow: "#9ACCCD"} ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    foreImg: allFile(filter : {relativePath: {eq: $voorgrond }}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 250, height: 250, cropFocus: ATTENTION, duotone: { highlight: "#9ACCCD", shadow: "#000000",opacity: 50}) {
              ...GatsbyImageSharpFixed
            } 
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default DocTemplate;
