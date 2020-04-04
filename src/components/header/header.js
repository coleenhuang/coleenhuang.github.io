import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import LanguageMenu from './LanguageMenu.js'
import MainMenu from './MainMenu'
import SideNav from './SideNav'
import styles from './header.module.css'
import { useTranslation } from "react-i18next"

const Header = (props) => {
    const { t } = useTranslation();
    const [showMenu, setMenu] = useState(false);
    const toggleMenu = ()=>setMenu(showMenu?false:true)
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
        <p onClick={toggleMenu}>
          {t("header.menu")}
        </p>
      </div>
      <div className={styles.navWrapper}>
        <MainMenu></MainMenu>
        <LanguageMenu ></LanguageMenu>
      </div>
      <SideNav menu={showMenu} switch={toggleMenu}/>
    </header>
)}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
