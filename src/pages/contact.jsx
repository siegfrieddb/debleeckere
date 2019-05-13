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
import MainHeader2 from "../components/MainHeader2/MainHeader2";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitleInline from "../components/PageTitleInline/PageTitleInline";
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

    var formStr = `<!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
    <form action="https://menstis.us20.list-manage.com/subscribe/post?u=fcb7bec9ffe0c9e9a8b38446c&amp;id=7fd4f7dcbc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
      <h2>Subscribe</h2>
    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
    <div class="mc-field-group">
      <label for="mce-EMAIL">Email Adres  <span class="asterisk">*</span>
    </label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
    </div>
    <div class="mc-field-group">
      <label for="mce-FNAME">Voornaam </label>
      <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
    </div>
    <div class="mc-field-group">
      <label for="mce-LNAME">Familienaam </label>
      <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
    </div>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fcb7bec9ffe0c9e9a8b38446c_7fd4f7dcbc" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday'; /*
     * Translated default messages for the $ validation plugin.
     * Locale: NL
     */
    $.extend($.validator.messages, {
            required: "Dit is een verplicht veld.",
            remote: "Controleer dit veld.",
            email: "Vul hier een geldig e-mailadres in.",
            url: "Vul hier een geldige URL in.",
            date: "Vul hier een geldige datum in.",
            dateISO: "Vul hier een geldige datum in (ISO-formaat).",
            number: "Vul hier een geldig getal in.",
            digits: "Vul hier alleen getallen in.",
            creditcard: "Vul hier een geldig creditcardnummer in.",
            equalTo: "Vul hier dezelfde waarde in.",
            accept: "Vul hier een waarde in met een geldige extensie.",
            maxlength: $.validator.format("Vul hier maximaal {0} tekens in."),
            minlength: $.validator.format("Vul hier minimaal {0} tekens in."),
            rangelength: $.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1} tekens."),
            range: $.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1}."),
            max: $.validator.format("Vul hier een waarde in kleiner dan of gelijk aan {0}."),
            min: $.validator.format("Vul hier een waarde in groter dan of gelijk aan {0}.")
    });}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    <!--End mc_embed_signup-->`
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
              <MainHeader2  fillRatioHeight={0.4} cover={this.props.data.frontImg.childImageSharp}  style={{"backgroundColor":"#FFFFFF"}}>
              <PageTitleInline text="Contact" /> 
                <MainNav  >
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    {  /*
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
              </MainHeader2>
              <PageSection>
              <div name="content" style={{paddingTop:30}}>
              Heeft u zelf iets te melden of te vragen,
              dan kunt u ons contacteren via sylvain@menstis.be
              
              U kunt zich hier aanmelden als u wenst op de hoogte te blijven van 
              de verdere uitbouw van de site.
              <div 
                  dangerouslySetInnerHTML={{ __html: formStr }}
              >
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
  query IndexDocumenten2Query {
      frontImg: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
  
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    
  }
`;

export default IndexTemplate;
 