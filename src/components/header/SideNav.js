import React, { useState } from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';

const SideNav = (props) =>{
  return(
    <div style={{display:`${props.menu?'block':'none'}`}}>
      <LanguageMenu />
      <MainMenu menu={props.menu} switch={props.switch}/>
    </div>
  )
};

export default SideNav;
