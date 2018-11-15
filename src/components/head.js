import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


const Head = ({ data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: data.site.siteMetadata.description },
    ]}
  >
    <html lang="en" />
  </Helmet>
)


export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
          }
        }
      }
    `}
    render={data => <Head data={data} {...props} />}
  />
)
