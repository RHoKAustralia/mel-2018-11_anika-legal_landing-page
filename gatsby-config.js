module.exports = {
  siteMetadata: {
    title: 'Anika Legal',
    description: 'blah blah blah'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Anika',
        short_name: 'Anika',
        start_url: '/',
        background_color: '#1d3745',
        theme_color: '#1d3745',
        display: 'minimal-ui',
        icon: 'src/images/anika-icon.png',
      },
    },
  ],
}
