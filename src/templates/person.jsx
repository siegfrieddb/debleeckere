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
import MainHeader2 from "../components/MainHeader2/MainHeader2";
import PostFormatting from "../components/PostFormatting/PostFormatting";
import PostDate from "../components/PostDate/PostDate";
import PageTitle from "../components/PageTitle/PageTitle"
import PageTitleTop from "../components/PageTitleTop/PageTitleTop"

import PostFooter from "../components/PostFooter/PostFooter";
import PageDocSection from "../components/PageDocSection/PageDocSection"
import Footer from "../components/Footer/Footer";
import AuthorModel from "../models/author-model";
import Disqus from "../components/Disqus/Disqus";
import Layout from "../components/layout";
import Img from "gatsby-image"
import Gallery from "../components/Gallery/Gallery";
import PersonDetailGallery from "../components/PersonDetailGallery/PersonDetailGallery";
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
    const { cover, voornaam, achternaam, geboorte, author } = persoon.frontmatter ;
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
      //match captions
      debugger;
      var relCap = _.map(this.props.data.related.edges, (el) => {
        el = el.node;
        var index = _.findIndex(this.props.pageContext.related_caption, (elFind) => {
          console.log(elFind)
          console.log(el.relativePath)
          return elFind.moza == el.relativePath
        })
        if (index != -1)  {
          return this.props.pageContext.related_caption[index].caption
        }
        else{
          return el.relativePath 
        }
      });


      relatedSection = (
      <PageDocSection>
          <h1>Gerelateerd</h1>
          
          <Gallery images={_.map(this.props.data.related.edges, e => e.node.childImageSharp)} 
                  links= {_.map(this.props.data.related.edges, e => e.node.relativePath.slice(0,-9))} 
                  captions = {relCap} ></Gallery> 
      </PageDocSection>)
    }
    if (this.props.data.subsection)
    { 
      subSection   = (
      <PageDocSection>
          <h1>Verhalen over {voornaam}</h1>
               
          <PersonDetailGallery images={_.map(this.props.data.subsection.edges, e => e.node.childImageSharp)} 
                  links= {_.map(this.props.data.subsection.edges, e => e.node.relativePath.slice(0,-4))} 
                  captions = {_.map(this.props.data.subsection.edges, e => {
                    const idx = e.node.relativePath.indexOf("/mozaik/")
                    return e.node.relativePath.slice(idx+8,e.node.relativePath.length-4);
                  })} ></PersonDetailGallery> 
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
      bckImg = this.props.data.backImg.edges[0].node.childImageSharp  
    }
    else{
      bckImg = this.props.data.defaultImg.childImageSharp  
    

    }
    return (
	<Layout location={this.props.location}>
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>Title  {`${voornaam} ${achternaam}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={persoon} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
        <MainHeader2 cover={bckImg} fillRatioHeight={0.4 }style={{"backgroundColor":"#FFFFFF"}}>
              <PageTitleTop  text = {`${voornaam} ${achternaam}`} > </PageTitleTop>
            
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
              height : "125px",
              padding: "",
              width: "auto"}}>
              <div  style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%,0)"
                }} >
                <div >
                  {foreImg}
                </div>
              </div>
            </div>
            
          </MainHeader2>
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
    defaultImg: file(relativePath: { eq: "missing.jpg" }) {
      childImageSharp {

        fluid{
          ...GatsbyImageSharpFluid
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
