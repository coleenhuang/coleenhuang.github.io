import { Link } from "gatsby"
import React from "react"
import LanguageMenu from './LanguageMenu.js'
import MainMenu from './MainMenu'

import styles from './header.module.css'
import { useTranslation } from "react-i18next"

const Header = ({toggleMenu, showMenu}) => {
    const { t } = useTranslation();
    
    return(
    <header >
        <div>
          <h1 className={styles.home}>
            <Link to="/">
              C
            </Link>
          </h1>
        </div>
        <div className={styles.menuButton} >
          <p onClick={toggleMenu}>
            {showMenu?t("header.close"):t("header.menu")}
          </p>
        </div>
        <div className={styles.navWrapper}>
          <MainMenu></MainMenu>
          <LanguageMenu ></LanguageMenu>
        </div>
    </header>
)}


export default Header
