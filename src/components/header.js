import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LanguageMenu from './LanguageMenu.js'
import MainMenu from './MainMenu'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.header}>
      <div>
        <h1 className={styles.home}>
          <Link to="/">
            Coleen
          </Link>
        </h1>
      </div>
      <MainMenu></MainMenu>
      <LanguageMenu ></LanguageMenu>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
