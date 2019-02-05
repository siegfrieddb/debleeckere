const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const siteConfig = require("./data/SiteConfig");
const {
  createPaginationPages,
  createLinkedPages
} = require("gatsby-pagination"); 

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    )
    {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      console.log("6")
    } 
    else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "persoon")
    ) 
    {
      slug = `/${_.kebabCase(node.frontmatter.persoon)}`;
      console.log("5")
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}`;
      console.log("3")
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}`;
      console.log("2")
    } else {
      slug = `/${parsedFilePath.dir}`;
      console.log("1")
    }
    console.log(slug)
    //TODO: add logic to intercept local links on the page
    
    
    
    createNodeField({ node, name: "slug", value: slug });
    //createNodeField({ node: fileNode, name: "content_type", value:  fileNode.sourceInstanceName});
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const indexPage = path.resolve("src/templates/index.jsx");
    const docPage = path.resolve("src/templates/documenten.jsx");
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    const authorPage = path.resolve("src/templates/author.jsx");
    const personPage = path.resolve("src/templates/person.jsx");
    const bakermatPage = path.resolve("src/templates/documenten.jsx");
    const onderzoekPage = path.resolve("src/templates/documenten.jsx");
    const documentenPage = path.resolve("src/templates/documenten.jsx");
      
    //const personIndexPage = path.resolve("src/templates/personIndex.jsx");

    if (
      !fs.existsSync(
        path.resolve(`content/${siteConfig.blogAuthorDir}/authors/`)
      )
    ) {
      reject(
        "The 'authors' folder is missing within the 'blogAuthorDir' folder."
      );
    }
    var postQuery = graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
		          filter: {fileAbsolutePath: {regex: "/posts/.*\\\\.md$/"}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
          }
        `
      ).then(result => {
        
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }
        

        let docEdges = _.filter(result.data.allMarkdownRemark.edges, edge=> edge.node.frontmatter.category == "documenten")


        // Creates document Index page
        createPaginationPages({
          createPage,
          edges: docEdges,
          component: docPage,
          limit: siteConfig.sitePaginationLimit,
          pathFormatter: path => `/documenten/${path}`
        });
    
        // Creates Index page
        createPaginationPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: siteConfig.sitePaginationLimit,
          
        });
          
        // Creates Posts
        createLinkedPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: postPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug
            }
          }),
          circular: true
        });

        const tagSet = new Set();
        const tagMap = new Map();
        const categorySet = new Set();
        const authorSet = new Set();
        authorSet.add(siteConfig.blogAuthorId);

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);

              const array = tagMap.has(tag) ? tagMap.get(tag) : [];
              array.push(edge);
              tagMap.set(tag, array);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          if (edge.node.frontmatter.author) {
            authorSet.add(edge.node.frontmatter.author);
          }
        });

        const tagFormatter = tag => route =>
          `/tags/${_.kebabCase(tag)}/${route !== 1 ? route : ""}`;
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          // Creates tag pages
          createPaginationPages({
            createPage,
            edges: tagMap.get(tag),
            component: tagPage,
            pathFormatter: tagFormatter(tag),
            limit: siteConfig.sitePaginationLimit,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });

        const authorList = Array.from(authorSet);
        authorList.forEach(author => {
          createPage({
            path: `/author/${_.kebabCase(author)}/`,
            component: authorPage,
            context: {
              author
            }
          });
        });
      });
    
    var queryTemplate =  (e,fields) => {return `
        {
          allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
              filter: {fileAbsolutePath: {regex:  "/` + e + `/[^/]*/[^/]*index\.md$/"}}
          ) {
            totalCount
            edges {
              node {
                frontmatter {` + fields + `
                }
                fields {
                  slug
                }
                excerpt
                timeToRead
              }
            }
          }
          voorgrond : allFile (filter: {absolutePath: {regex: "/` + e + `.*moza.jpg/"}} )
          {
            edges {
              node{
                absolutePath 
                relativePath
                childImageSharp {
                  
                  fixed(width: 200, height:255) {
                    base64
                    width
                    height
                    src
                    srcSet
                  } 
                }
              }
            }
          }
        }
      `};
      var personFields = `
      persoon
      achternaam
      voornaam
      vader
      moeder
      geboren
      overleden 
    `;
    var otherFields = ` 
      author
      date
    `;
    
    
    var personQuery = graphql(queryTemplate("persons", personFields));
    var bakermatQuery = graphql(queryTemplate("bakermat",otherFields));
    var onderzoekQuery = graphql(queryTemplate("onderzoek",otherFields));
    var documentenQuery = graphql(queryTemplate("documenten",otherFields));
    
    
    
    resolve(Promise.all([postQuery, personQuery, bakermatQuery, onderzoekQuery, documentenQuery]).then(  values  => {
        result = values[0]
        personResult = values[1]
        bakermatResult = values[2]
        onderzoekResult = values[3]
        documentenResult = values[4]


        console.log("Creating person pages")
        //image fragments are not available, check them at
        //https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

        if (personResult.errors) {
          /* eslint no-console: "off" */
          console.log(personResult.errors);
          reject(personResult.errors);
        }
        /*
        // Creates Index page
        createPaginationPages({
          createPage,
          edges: personResult.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: siteConfig.sitePaginationLimit
        });
        */
        //scan related
        var relatedDb = {}
        var addToDb = (entries) =>
        {
          _.forOwn(entries,(value,key) => {
            if(!(key in relatedDb))
            {
              relatedDb[key] = {}
            }
            _.forOwn(value, (subValue,subKey) => {
              if (!(subKey in relatedDb[key]))
              {
                relatedDb[key][subKey] = subValue
              }
            })
            
          })
          

        }
        
        _.forEach(personResult.data.allMarkdownRemark.edges, e => {
          var persoon = e.node.frontmatter.persoon
          var moeder = e.node.frontmatter.moeder
          var vader = e.node.frontmatter.vader
          if (persoon == null)
          {
            console.log("Error Adding persoon: " + JSON.stringify(e.node));
            return
          }

          var entries = {}
          entries[persoon] = {}
          if (vader != null)
          {
            entries[persoon][ vader] = "vader"
            entries[vader] =  {}  
            entries[vader][persoon] = "kind"
          }
          if (moeder != null)
          {
            entries[persoon][ moeder] = "moeder"
            entries[moeder] = {} 
            entries[moeder][persoon] = "kind"
          }
          if (vader != null && moeder != null)
          {
            entries[vader][moeder] = "vrouw"
            entries[moeder][vader] =  "man" 
            
          }
        

          
          
          addToDb(entries)
          


        });
        console.log(JSON.stringify(relatedDb))


        if (!personResult.data.voorgrond)
        {
          console.log("voorgrond null")
        }
        voorgrondjes = _.map(personResult.data.voorgrond.edges, e =>  {return {
          voorgrond: e.node.childImageSharp,
          person: e.node.relativePath.slice(0,-9),
        }});
        vgImgByPerson = _.chain(voorgrondjes)
            .keyBy('person')
            .mapValues('voorgrond')
            .value();
        var infoByPerson = {};
        _.forEach(personResult.data.allMarkdownRemark.edges, e => {
            infoByPerson[e.node.frontmatter.persoon] = e.node.frontmatter;
        });
        var getPersonInfo = e => {
          var voorgrond =  null
          if (e in vgImgByPerson)
          {
            voorgrond = vgImgByPerson[e]
          }
          var info = null;
          if (e in infoByPerson)
          {
            info = infoByPerson[e];
          }
          return  {person : e, voorgrond , info, slug: "/" + e};
        };
        var getRelated = (persoon) =>
        {
           if (!(persoon in relatedDb))
           {
              return []
           }
           var ret = []
           _.forOwn(relatedDb[persoon], (value,key) => {
             if (key.length > 0)
             {
              ret.push(key + "/moza.jpg")
             }   
           })
           console.log("related for " + persoon + ": "+JSON.stringify(ret))
           return ret
        }

        // Creates all pages
        createLinkedPages({
          createPage,
          edges: personResult.data.allMarkdownRemark.edges,
          component: personPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug,
              moeder: getPersonInfo( edge.node.frontmatter.moeder),
              vader: getPersonInfo(edge.node.frontmatter.vader),
              moeder_slug: "/" + edge.node.frontmatter.moeder, //+ getPersonInfo( edge.node.frontmatter.moeder).slug,
              vader_slug: "/" + edge.node.frontmatter.vader, //+ getPersonInfo(edge.node.frontmatter.vader).slug,
              children: [],
              achtergrond: edge.node.fields.slug.slice(1) + "/achtergrond.jpg",
              voorgrond: edge.node.fields.slug.slice(1) + "/voorgrond.jpg",
              related: getRelated(edge.node.frontmatter.persoon)
            }
          }),
          circular: true
        });

        console.log("creating other pages")
        console.log(bakermatResult.data.allMarkdownRemark.edges[0].node.fields.slug.slice(1) + "/achtergrond.jpg")
        var createOtherPages= (edges, page) =>
          createLinkedPages({
            createPage,
            edges: edges,
            component: page,
            edgeParser: edge => ({
              path: edge.node.fields.slug,
              context: {
                slug: edge.node.fields.slug,

                achtergrond: edge.node.fields.slug.slice(1) + "/achtergrond.jpg",
                voorgrond: edge.node.fields.slug.slice(1) + "/voorgrond.jpg",
                related: []
              }
            }),
            circular: true
          });
          console.log(JSON.stringify(bakermatResult.data.allMarkdownRemark.edges))
          createOtherPages(bakermatResult.data.allMarkdownRemark.edges, bakermatPage)
          createOtherPages(onderzoekResult.data.allMarkdownRemark.edges, onderzoekPage)
          createOtherPages(documentenResult.data.allMarkdownRemark.edges, documentenPage)
          
      }));
  });
    /*
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC },
                filter: {fileAbsolutePath: {regex: "/onderzoek/.*\\\\.md$/"}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
            voorgrond : allFile (filter: {absolutePath: {regex: "/onderzoek.*voorgrond.jpg/"}} )
            {
              edges {
                node{
                  absolutePath 
                  relativePath
                  childImageSharp {
                    
                    fixed(width: 200, height:255) {
                      base64
                      width
                      height
                      src
                      srcSet
                    } 
                  }
                }
              }
            }
          }
        `
      ).then(result => {
//image fragments are not available, check them at
//https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

        if (result.errors) {
         
          console.log(result.errors);
          reject(result.errors);
        }
       
        if (!result.data.voorgrond)
        {
          console.log("voorgrond null")
        }
        voorgrondjes = _.map(result.data.voorgrond.edges, e =>  {return {
          voorgrond: e.node.childImageSharp,
          key: e.node.relativePath.slice(0,-14),
        }});
        vgImgByKey = _.chain(voorgrondjes)
            .keyBy('key')
            .mapValues('voorgrond')
            .value();
        var infoByKey = {};
        _.forEach(result.data.allMarkdownRemark.edges, e => {
            infoByKey[e.node.frontmatter.title] = e.node.frontmatter;
            console.log(e.node.frontmatter);
        });
        var getPostInfo = e => {
          var voorgrond =  null
          if (e in vgImgByKey)
          {
            voorgrond = vgImgByKey[e]
          }
          var info = null;
          if (e in infoByKey)
          {
            info = infoByKey[e];
          }
          return  {post : e, voorgrond , info, slug: "/" + e};
        };
        // Creates all pages
        createLinkedPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: onderzoekPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug,
              achtergrond: edge.node.fields.slug.slice(1) + "/achtergrond.jpg",
              voorgrond: edge.node.fields.slug.slice(1) + "/voorgrond.jpg"
            }
          }),
          circular: true
        });
      })
    );*/
  
};
