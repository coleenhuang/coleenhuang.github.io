import React from 'react'
import { Link } from 'gatsby'
import styles from './MainMenu.module.css'
import { useTranslation } from "react-i18next"

function MainMenu(props) {
  const { t } = useTranslation();
  return(
    <nav className={styles.wrapper}>
      <ul className={styles.mainNav}>
        <li>
          <Link to='/about' onClick={props.switch}>
            {t('header.about')}
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={props.switch}>
            {t('header.projects')}
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={props.switch}>
            {t('header.contact')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
