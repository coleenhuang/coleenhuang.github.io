import React from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';
import styles from './mobileNav.module.css'

const MobileNav = ({open, toggleMenu}) =>{
  return(
    <div
    className={`${styles.mobileMenu} ${open&&styles.open}`}
    >
      <LanguageMenu />
      <MainMenu switch={toggleMenu}/>
    </div>
  )
}

export default MobileNav;
