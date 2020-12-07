const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


// creates slugs for pages
exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            availableForSale
            createdAt
            descriptionHtml
            description
            handle
            images {
              originalSrc
              altText
              id
            }
            onlineStoreUrl
            options {
              id
              name
              shopifyId
              values
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            productType
            shopifyId
            tags
            title
            totalInventory
            variants {
              availableForSale
              id
              image {
                altText
                originalSrc
                id
              }
              priceV2 {
                amount
                currencyCode
              }
              quantityAvailable
              requiresShipping
              selectedOptions {
                name
                value
              }
              shopifyId
              sku
              title
              weight
              weightUnit
            }
          }
        }
      }
      allShopifyPage {
        edges {
          node {
            title
            handle
            body
            bodySummary
          }
        }
      }
    }
  `).then(result => {
    if(result.errors){
      Promise.reject(result.errors)
    }
    //Create Regular Pages
    result.data.allShopifyPage.edges.forEach(({ node }) => {
      const id = node.handle
      createPage({
        path: `/${id}/`,
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          id,
          node
        },
      })
    })
    //Create Product Pages
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      const id = node.handle
      createPage({
        path: `product/${id}/`,
        component: path.resolve(`./src/templates/product-template.js`),
        context: {
          id,
          node
        },
      })
    })
  })
}
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Define a template for blog post
//   const blogPost = path.resolve(`./src/templates/blog-post.js`)

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           nodes {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.allMarkdownRemark.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1]
//       const next = index === 0 ? null : posts[index - 1]

//       createPage({
//         path: post.fields.slug,
//         component: blogPost,
//         context: {
//           slug: post.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })
//   }
// }


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
