import React from 'react'
import { Link } from 'gatsby'
import styles from './MainMenu.module.css'
import { useTranslation } from "react-i18next"

function MainMenu() {
  const { t } = useTranslation();
  return(
    <nav className={styles.wrapper}>
      <ul className={styles.mainNav}>
        <li>
          <Link to='/about'>
            {t('header.about')}
          </Link>
        </li>
        <li>
          <Link to="/projects">
            {t('header.projects')}
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {t('header.contact')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
