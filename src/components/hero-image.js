import React from 'react'
import Img from 'gatsby-image'

import styles from "../styles/hero-image.module.scss"

const HeroImage = ({ image, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.image}>
      <Img
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        fluid={image.childImageSharp.fluid}
      />
    </div>
    <div className="container">
      <div className="row">
         <div className={`col ${styles.children}`}>
          { children }
        </div>
      </div>
    </div>
  </div>
)

export default HeroImage
