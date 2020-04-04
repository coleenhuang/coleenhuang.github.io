import React, { useState } from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';

const SideNav = (props) =>{
  console.log(props.open)
  return(
    <div style={{display:`${props.open?'block':'none'}`}}>
      <LanguageMenu/>
      <MainMenu />
    </div>
  )
};

export default SideNav;
