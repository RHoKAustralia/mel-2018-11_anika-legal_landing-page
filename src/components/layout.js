import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Head from './head'
import './fontawesome'
import '../styles/main.scss'

const Layout = ({ children }) => (
  <div>
    <Head />
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
