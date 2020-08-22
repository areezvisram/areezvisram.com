module.exports = {
  siteMetadata: {
    title: `My Website`,
    description: `The personal website of Areez Visram.`,
    author: `Areez Visram`,
    url: "http://areezvisram.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Areez Visram Personal Website`,
        short_name: `My website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, 
      },
    },

  ],
}
