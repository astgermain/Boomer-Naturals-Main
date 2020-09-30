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
