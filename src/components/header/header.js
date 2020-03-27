import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LanguageMenu from './LanguageMenu.js'
import MainMenu from './MainMenu'
import styles from './header.module.css'
import { useTranslation } from "react-i18next"

const Header = (props) => {
    const { t } = useTranslation();
    return(
    <header className={styles.header}>
      <div>
        <h1 className={styles.home}>
          <Link to="/">
            C
          </Link>
        </h1>
      </div>
      <div className={styles.menuButton} >
        <p onClick={openMenu}>{t("header.menu")}</p>
      </div>
      <div className={styles.navWrapper}>
        <MainMenu></MainMenu>
        <LanguageMenu ></LanguageMenu>
      </div>
    </header>
)}

function openMenu(e) {
    e.preventDefault();
    console.log('menu opened')
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
