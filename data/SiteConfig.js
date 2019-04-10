module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  personDir: "persons",
  blogAuthorId: "sylvain", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "De Bleeckere", // Site title.
  siteTitleAlt: "Familienaam De Bleeckere Site", // Alternative site title for SEO.
  siteLogo:
    "images/debleeckere-logo.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: " https://siegfrieddb.github.io", // Domain of your website without pathPrefix.
   //  /debleeckere  Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Een site over de familienaam De Bleeckere.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/debleeckere.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Pat  h to the RSS file.
  siteRssAuthor: "De Bleeckere RSS", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-TODO-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/haysclark/gatsby-starter-casper",
    "https://twitter.com/gatsbyjs",
    "mailto:gatsbyjs@example.com"
  ],
  postDefaultCategoryID: "Document", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Familie",
      url: "/familie  ",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Bakermat",
      url: "/bakermat",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Onderzoek",
      url: "/onderzoek",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Documenten",
      url: "/documenten",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Contact",
      url: "/contact/",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "De Bleeckere Site" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#FFFDEE", // Used for setting manifest and progress theme colors.
  backgroundColor: "#9ACCCD", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
