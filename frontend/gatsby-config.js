module.exports = {
  siteMetadata: {
    title: `Boomer Naturals`,
    author: {
      name: `Boomer Naturals`,
      summary: `Boomer Naturals is a full-service wellness company that provides products and services that enhance your well-being and increase your quality of life.`,
    },
    description: `Boomer Naturals' proprietary Boomer Botanics is clinically proven to help support and balance many of the body's important systems. Boomer Botanics helps regulate your immune system, ease your pain, and more. Our 30-Day Reusable Face Covers help keep you safe and protected with three layers and nano silver technology.`,
    siteUrl: `https://boomernaturals.com/`,
    social: {
      twitter: `https://twitter.com/boomernaturals`,
      facebook: `https://www.facebook.com/boomernaturals`,
      pintrest: `https://www.pinterest.com/BoomerNaturals/`,
      linkedin: `https://www.linkedin.com/company/boomernaturals/`,
      instagram: `https://www.instagram.com/boomernaturals/`,
      youtube: `https://www.youtube.com/channel/UCiGRPRAzsn8PpJYtbYVZubQ/about`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      //Easier way to do gatsby-source-graphql for shopify graphql apis
      resolve: "gatsby-source-shopify",
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        // If you are running your shop on a custom domain, you need to use that
        // as the shop name, without a trailing slash, for example:
        // shopName: "gatsby-shop.com",
        shopName: "boomernaturals.com",
  
        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: "5060f93e1d5681a9d90371c49cf1a0db",
  
        // Set the API version you want to use. For a list of available API versions,
        // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
        // Defaults to 2019-07
        apiVersion: "2020-10",
  
        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
  
        // Number of records to fetch on each request when building the cache
        // at startup. If your application encounters timeout errors during
        // startup, try decreasing this number.
        paginationSize: 250,
  
        // List of collections you want to fetch.
        // Possible values are: 'shop' and 'content'.
        // Defaults to ['shop', 'content'].
        includeCollections: ["shop", "content"],
  
        // Allow overriding the default queries
        // This allows you to include/exclude extra fields when sourcing nodes
        // Available keys are: articles, blogs, collections, products, shopPolicies, and pages
        // Queries need to accept arguments for first and after
        // You will need to include all the fields you want available for a
        // specific key. View the `shopifyQueries Defaults` section below for a
        // full list of keys and fields.
        shopifyQueries: {
          articles: `
            query GetArticles($first: Int!, $after: String) {
              articles(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    author {
                      bio
                      email
                      firstName
                      lastName
                      name
                    }
                    blog {
                      id
                    }
                    comments(first: 250) {
                      edges {
                        node {
                          author {
                            email
                            name
                          }
                          content
                          contentHtml
                          id
                        }
                      }
                    }
                    content
                    contentHtml
                    excerpt
                    excerptHtml
                    id
                    handle
                    image {
                      altText
                      id
                      src
                    }
                    publishedAt
                    tags
                    title
                    url
                    seo {
                      title
                      description
                    }
                  }
                }
              }
            }
          `,
          blogs: `
            query GetBlogs($first: Int!, $after: String) {
              blogs(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    id
                    handle
                    title
                    url
                  }
                }
              }
            }
          `,
          collections: `
            query GetCollections($first: Int!, $after: String) {
              collections(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    description
                    descriptionHtml
                    handle
                    id
                    image {
                      altText
                      id
                      src
                    }
                    products(first: 250) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                    title
                    updatedAt
                  }
                }
              }
            }
          `,
          products: `
            query GetProducts($first: Int!, $after: String) {
              products(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    availableForSale
                    createdAt
                    description
                    descriptionHtml
                    handle
                    id
                    images(first: 250) {
                      edges {
                        node {
                          id
                          altText
                          originalSrc
                        }
                      }
                    }
                    metafields(first: 250) {
                      edges {
                        node {
                          description
                          id
                          key
                          namespace
                          value
                          valueType
                        }
                      }
                    }
                    onlineStoreUrl
                    options {
                      id
                      name
                      values
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    productType
                    publishedAt
                    tags
                    title
                    updatedAt
                    variants(first: 250) {
                      edges {
                        node {
                          availableForSale
                          compareAtPrice
                          compareAtPriceV2 {
                            amount
                            currencyCode
                          }
                          id
                          image {
                            altText
                            id
                            originalSrc
                          }
                          metafields(first: 250) {
                            edges {
                              node {
                                description
                                id
                                key
                                namespace
                                value
                                valueType
                              }
                            }
                          }
                          price
                          priceV2 {
                            amount
                            currencyCode
                          }
                          requiresShipping
                          selectedOptions {
                            name
                            value
                          }
                          sku
                          title
                          weight
                          weightUnit
                          presentmentPrices(first: 250) {
                            edges {
                              node {
                                price {
                                  amount
                                  currencyCode
                                }
                                compareAtPrice {
                                  amount
                                  currencyCode
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    vendor
                  }
                }
              }
            }
          `,
          shopPolicies: `
            query GetPolicies {
              shop {
                privacyPolicy {
                  body
                  id
                  title
                  url
                }
                refundPolicy {
                  body
                  id
                  title
                  url
                }
                termsOfService {
                  body
                  id
                  title
                  url
                }
              }
            }
          `,
          pages: `
            query GetPages($first: Int!, $after: String) {
              pages(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    id
                    handle
                    title
                    body
                    bodySummary
                    updatedAt
                    url
                  }
                }
              }
            }
          `,
        },
      },
    },
    /*
    {
      resolve: "gatsby-source-graphql",
      /*
      //Admin API Option for custom admin panel
      options: {
        typeName: "Shopify Admin GraphQL API",
        fieldName: "admin",
        url: `https://${process.env.STORE_DOMAIN}.myshopify.com/admin/api/2020-10/graphql.json`,
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Access-Token': `${process.env.ADMIN_PASSWORD}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {
          method: 'POST'
        },
        refetchInterval: 60,
        
      },
      */
      /*
      //Storefront API Option for custom admin panel
      options: {
        typeName: "Shopify Storefront GraphQL API",
        fieldName: "admin",
        url: `https://${process.env.STORE_DOMAIN}.myshopify.com/api/2019-07/graphql.json`,
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Storefront-Access-Token': `${process.env.STOREFRONT_TOKEN}`,
          'Accept': 'application/json'
        },
        // Additional options to pass to node-fetch
        fetchOptions: {
          method: 'POST'
        },
        refetchInterval: 60,
        
      },
      */

      /*
        // HTTP headers alternatively accepts a function (allows async)
        headers: async () => {
          return {
            Authorization: await getAuthorizationToken(),
          }
        },
      */
     /*
    },
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // material ui plugin helps with prefixing and minification
    `gatsby-plugin-material-ui`,

  ],
}
