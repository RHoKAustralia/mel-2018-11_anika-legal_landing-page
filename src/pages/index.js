import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SOCIAL from '../constants/social'
import Layout from '../components/layout'
import HeroImage from '../components/hero-image'
import AnikaIntroVideo from '../components/anika-intro-video'

import styles from "../styles/index-page.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <HeroImage image={data.heroImage}>
      <div>
        <h1>take back control. <strong>with anika.</strong></h1>
        <p>
          We're hard at work building Anika.
          Check out the vision we're working towards,
          and our demo.
        </p>
        <p>
          Want to know more?
          You can reach us on <a href={SOCIAL.FACEBOOK_URL}>Facebook here</a> –
          we’d love to hear from you!
        </p>

      </div>
    </HeroImage>
    <div className="container">
      <div className="row">
        <div className={`col-sm-8 offset-sm-2 text-center ${styles.content}`}>
          <h2>anika – our vision</h2>
          <hr className={styles.rule} />
          <h3>
            We want to put the power of legal advice in your hands,
            when you need it most.
            Here's how we're going to do it.
          </h3>
          <AnikaIntroVideo className={styles.video}/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={styles.stakeholders}>
            <div className={styles.stakeholder}>
              <h2>for free legal advice</h2>
            </div>
            <div className={styles.stakeholder}>
              <h2>for students</h2>
            </div>
            <div className={styles.stakeholder}>
              <h2>for universities</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)


export default props => (
  <StaticQuery
    query={graphql`
      query {
          heroImage: file(relativePath: { eq: "hero/index.jpg" }) {
            childImageSharp { fluid(maxWidth: 1500) { ...GatsbyImageSharpFluid }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
