module.exports = {
  siteMetadata: {
    title: `Jerocam Shop`,
    description: `It is my first snipcart-gatsby- DatoCMS website development!`,
    author: `@gatsbyjs`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `8d87bb28d80e205f2ba882106ccc8e`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#C33764`,
        theme_color: `#C33764`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'MGZkNzIzNzAtOWM5Mi00ZjUyLWJjZTgtNTE3NzM1YjQzODlmNjM3NTIyMjI0MjU1NjI5MjI0',
        autopop:true
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
