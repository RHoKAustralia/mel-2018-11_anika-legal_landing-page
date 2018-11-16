import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SOCIAL from '../constants/social'
import "../styles/header.scss"

const socialMedia = [
  { url: SOCIAL.FACEBOOK_URL, icon: ['fab', 'facebook-f'] },
  { url: SOCIAL.TWITTER_URL, icon: ['fab', 'twitter'] },
  { url: SOCIAL.INSTAGRAM_URL, icon: ['fab', 'instagram'] },
  { url: SOCIAL.LINKEDIN_URL, icon: ['fab', 'linkedin'] },
]
const navItems = [
  { path: '/', title: 'home' },
  { path: '/clients', title: 'clients' },
  { path: '/students', title: 'students' },
  { path: '/lawyers', title: 'lawyers' },
  { path: '/faq', title: 'FAQ' },
]


// FIXME - mobile header doesn't work
// FIXME - clean up styles / markup
const Header = ({ data }) => (
  <div>
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Img fixed={data.logoImage.childImageSharp.fixed} />
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            {navItems.map(({title, path}) => (
              <Link key={path} to={path}>
                <li className="nav-item">
                  <div className="nav-link">{title}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <section className="sub-header">
      <div className="container">
        <div className="col-sm-12 text-right">
          {socialMedia.map(({ url, icon}) => (
            <a key={url} href={url}><FontAwesomeIcon icon={icon} /></a>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
          site { siteMetadata { title } }
          logoImage: file(relativePath: { eq: "anika-logo.png" }) {
            childImageSharp { fixed(width: 180, height: 70) { ...GatsbyImageSharpFixed_noBase64 }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
