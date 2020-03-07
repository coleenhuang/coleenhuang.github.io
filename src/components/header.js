import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LanguageMenu from './LanguageMenu.js'
import MainMenu from './MainMenu'

const Header = () => (
  <header
    style={{
      color: 'white',
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
    </div>
    <MainMenu></MainMenu>
    <LanguageMenu></LanguageMenu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
