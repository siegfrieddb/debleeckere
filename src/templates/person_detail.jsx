import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainHeader2 from "../components/MainHeader2/MainHeader2";
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
import Footer from "../components/Footer/Footer";
import AuthorModel from "../models/author-model";
import Disqus from "../components/Disqus/Disqus";
import Layout from "../components/layout";
import Img from "gatsby-image"
import {  Link} from "gatsby";
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
	const { slug } = this.props.pageContext;
    const persoon = this.props.data.markdownRemark;
    var  voornaam = ""
    var  achternaam = ""   
    var frontmatter_persoon ="frontmatter_unknown"
    if (this.props.data.person && this.props.data.person.frontmatter)
    {
        voornaam = this.props.data.person.frontmatter.voornaam
        achternaam = this.props.data.person.frontmatter.achternaam
        frontmatter_persoon = this.props.data.person.frontmatter.persoon
    }
    const className = "persoon"
    const subsectionIdx = slug.indexOf("/mozaik/")
    const subsectionTitle = slug.slice(subsectionIdx+8).substring(2)
    var moza = this.props.data.moza; 
    if (!moza){
      moza = this.props.data.missingImg;
    }
    
    var subSection = ""
  
    if (this.props.data.subsection)
    { 
      subSection   = (
      <PageDocSection>
          <h1>Andere verhalen over {voornaam}</h1>
          <PersonDetailGallery images={_.map(this.props.data.subsection.edges, e => e.node.childImageSharp)} 
                  links= {_.map(this.props.data.subsection.edges, e => e.node.relativePath.slice(0,-4))} 
                  captions = {_.map(this.props.data.subsection.edges, e => {
                          const idx = e.node.relativePath.indexOf("/mozaik/")
                          return e.node.relativePath.slice(idx+8,e.node.relativePath.length-4);
                        })
                      }  ></PersonDetailGallery> 
      </PageDocSection>)
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
        <MainHeader2 className="post-head" noscale fillHeight={250} style={{backgroundColor:"#FFFFFF"}} cover={moza.childImageSharp} >
          
            <h1> {subsectionTitle} </h1>
            <MainNav>
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
            </MainHeader2>
          <MainContent>
            <PostFormatting className={className}>
              <PageDocSection>
            
                <section  className="post-content"
                dangerouslySetInnerHTML={{ __html: persoon.html }}></section>
               </PageDocSection >

                {subSection}
                <PageDocSection>

               <section className="post-content">
                  <p>Terug naar hoofdpagina van <Link to={frontmatter_persoon +  "/"}>{voornaam} {achternaam}</Link></p>
               </section>
               </PageDocSection >
              
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
  query PersoonBySlugDetail($slug: String!, $personSlug: String!, $subsection: [String], $moza: String!) {
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
    person: markdownRemark(fields: { slug: { eq: $personSlug } }) {
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
      moza: file(relativePath: { eq: $moza }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      missingImg: file(relativePath: { eq: "missing.jpg" }) {
        childImageSharp {
  
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    subsection:  allFile (filter:{relativePath : {in : $subsection}})
    {
      edges {
        node {
          relativePath
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

export default PostTemplate;
