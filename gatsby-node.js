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
    } 
    else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "persoon")
    ) 
    {
      slug = `/${_.kebabCase(node.frontmatter.persoon)}`;
    }  
    else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const indexPage = path.resolve("src/templates/index.jsx");
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    const authorPage = path.resolve("src/templates/author.jsx");
    const personPage = path.resolve("src/templates/person.jsx");
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

    resolve(
      graphql(
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
		
        // Creates Index page
        createPaginationPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: siteConfig.sitePaginationLimit
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
      })
    );
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC },
                filter: {fileAbsolutePath: {regex: "/persons/.*\\\\.md$/"}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    persoon
                    achternaam
                    voornaam
                    vader
                    moeder
                    geboren
                    overleden 

                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
            voorgrond : allFile (filter: {absolutePath: {regex: "/persons.*voorgrond.jpg/"}} )
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
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }
        /*
        // Creates Index page
        createPaginationPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: siteConfig.sitePaginationLimit
        });
        */
        if (!result.data.voorgrond)
        {
          console.log("voorgrond null")
        }
        voorgrondjes = _.map(result.data.voorgrond.edges, e =>  {return {
          voorgrond: e.node.childImageSharp,
          person: e.node.relativePath.slice(0,-14),
        }});
        vgImgByPerson = _.chain(voorgrondjes)
            .keyBy('person')
            .mapValues('voorgrond')
            .value();
        var infoByPerson = {};
        _.forEach(result.data.allMarkdownRemark.edges, e => {
            infoByPerson[e.node.frontmatter.persoon] = e.node.frontmatter;
            console.log(e.node.frontmatter);
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
        // Creates all pages
        createLinkedPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
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
              voorgrond: edge.node.fields.slug.slice(1) + "/voorgrond.jpg"
            }
          }),
          circular: true
        });
      })
    );

  });
};
