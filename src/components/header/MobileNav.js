import React, { useState } from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';
import styles from './mobileNav.module.css'

const MobileNav = (props) =>{
  return(
    <div
    className={`${styles.mobileMenu} ${props.open&&styles.open}`}
    >
      <LanguageMenu />
      <MainMenu switch={props.switch}/>
    </div>
  )
}

export default MobileNav;
