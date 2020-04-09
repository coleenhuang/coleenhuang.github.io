import React, { useState } from 'react';
import LanguageMenu from './LanguageMenu';
import MainMenu from './MainMenu';

const SideNav = (props) =>{
  const [dimensions, setDimensions] = React.useState({
   height: window.innerHeight,
   width: window.innerWidth
 })
 React.useEffect(() => {
   function handleResize(){
     setDimensions({
       height: window.innerHeight,
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
       <div>Rendered at {dimensions.width} x {dimensions.height}</div>
    </div>
  )
}

export default SideNav;
