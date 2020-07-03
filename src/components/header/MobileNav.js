import React from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';
import styles from './mobileNav.module.css'

const MobileNav = ({open, switch}) =>{
  return(
    <div
    className={`${styles.mobileMenu} ${open&&styles.open}`}
    >
      <LanguageMenu />
      <MainMenu switch={switch}/>
    </div>
  )
}

export default MobileNav;
