import React, { useState } from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';
import window from 'global'

const SideNav = (props) =>{
  const [dimensions, setDimensions] = React.useState({
   width: window.innerWidth
 })
 React.useEffect(() => {
   function handleResize(){
     setDimensions({
       width: window.innerWidth
     })
   }
   window.addEventListener('resize', handleResize)
   return _ => {
      window.removeEventListener('resize', handleResize)
  }
 })
  return(
    <div
    style={{display:`${dimensions.width>=768?'none':props.menu?'block':'none'}`,
     gridArea:'nav',}}>
      <LanguageMenu />
      <MainMenu switch={props.switch}/>
    </div>
  )
}

export default SideNav;
