import React from 'react'
import { Link } from 'gatsby'
import styles from './MainMenu.module.css'

function MainMenu() {
  return(
    <nav className={styles.wrapper}>
      <ul className={styles.mainNav}>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
