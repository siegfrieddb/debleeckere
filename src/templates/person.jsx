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
import PageDocSection from "../components/PageDocSection/PageDocSection"
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
import Gallery from "../components/Gallery/Gallery";
import _ from "lodash"; 
import "./documenten.css"

const formatReadPersoon = value => ({
  path: value.fields.slug,
  voornaam: value.frontmatter.voornaam,
  achternaam: value.frontmatter.achternaam,
  cover: value.frontmatter.cover,
});

class PostTemplate extends React.Component {
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
	  const { slug, vader, moeder,voorgrond,achtergrond } = this.props.pageContext;
    const persoon = this.props.data.markdownRemark;
    const { cover, voornaam, achternaam, geboorte, author } = persoon;
    const className = "persoon"
    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    );
    
    
    var relatedSection = ""
    var subSection = ""
    if (this.props.data.related)
    { 
      relatedSection = (
      <PageDocSection>
          <h1>Gerelateerd</h1>
          
          <Gallery images={_.map(this.props.data.related.edges, e => e.node.childImageSharp)} 
                  links= {_.map(this.props.data.related.edges, e => e.node.relativePath.slice(0,-9))} ></Gallery> 
      </PageDocSection>)
    }
    if (this.props.data.subsection)
    { 
      subSection   = (
      <PageDocSection>
          
          <Gallery images={_.map(this.props.data.subsection.edges, e => e.node.childImageSharp)} 
                  links= {_.map(this.props.data.subsection.edges, e => e.node.relativePath.slice(0,-4))} ></Gallery> 
      </PageDocSection>)
    }
    var foreImg = (<div></div>)
    if (this.props.data.foreImg != null)
    {
      var foregroundWidth =  250 * this.props.data.foreImg.edges[0].node.childImageSharp.fluid.aspectRatio 
      foreImg = (<Img  style={{height: "250px",width: foregroundWidth}}  fluid={this.props.data.foreImg.edges[0].node.childImageSharp.fluid}> </Img>)
                    
    }
    var bckImg = null
    if (this.props.data.backImg != null)
    {
      this.props.data.backImg.edges[0].node.childImageSharp.fluid
    }
    return (
	<Layout location={this.props.location}>
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${voornaam} ${achternaam}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={persoon} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeaderImg className="post-head" fluid={bckImg} >
            <MainNav>
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
            <div style={{
              position: "relative", 
              top: "-125px", 
              display:"block", 
              background: "none !important", 
              border: "none !important",  
              "WebkitBoxSizing": "border-box", 
              "MozBoxSizing": "border-box",
              boxSizing: "border-box",
              display: "block",
              height : "250px",
              padding: "1px 0 5px",
              width: "auto"}}>
              <div  style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%,0)"
              }} >
              <div >
                {foreImg}
                      
                      </div></div>
            </div>
            
          </MainHeaderImg>
          <MainContent>
            <PostFormatting className={className}>
              <PageDocSection>
                <section  className="post-content"
                dangerouslySetInnerHTML={{ __html: persoon.html }}></section>
               </PageDocSection >
               {subSection}
               {relatedSection}
               
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
                <Disqus postNode={persoon} />
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
  query PersoonBySlug($slug: String!, $vader_slug: String, $moeder_slug: String, $voorgrond: String, $achtergrond : String, $related: [String], $subsection: [String]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        voornaam
        achternaam
        vader
        moeder
        geboren
        overleden
        persoon
        author
      }
      fields {
        slug
      }
    }
    # vader persoon
    vader: markdownRemark(fields: { slug: { eq: $vader_slug } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        voornaam
        achternaam
        geboren
        overleden
        author
      }
      fields {
        slug
      }
    }
    # moeder persoon
    moeder: markdownRemark(fields: { slug: { eq: $moeder_slug } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        voornaam
        achternaam
        geboren
        overleden
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
    subsection:  allFile (filter:{relativePath : {in : $subsection}})
    {
      edges 
      {
        node 
        {
          relativePath
          childImageSharp 
          {
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
    related:  allFile (filter:{relativePath : {in : $related}})
    {
      edges 
      {
        node 
        {
          relativePath
          childImageSharp 
          {
            fixed(width: 250, height: 250, cropFocus: ATTENTION, duotone: { highlight: "#9ACCCD", shadow: "#000000",opacity: 50}) 
            {
              ...GatsbyImageSharpFixed
            } 
            fluid(maxWidth: 1000)
            {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`;

export default PostTemplate;
