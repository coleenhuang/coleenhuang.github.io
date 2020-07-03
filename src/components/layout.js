  import React, { useState } from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { withTrans } from '../i18n/withTrans'

 import Header from "./header/header"
 import MobileNav from './header/MobileNav'
 import "./layout.css"

 const Layout = ({ children, t, i18n }) => {
    const [showMenu, setMenu] = useState(false);
    const toggleMenu = ()=>setMenu(showMenu?false:true)
   return (
     <div>
         <Header toggleMenu={toggleMenu} showMenu={showMenu}/>
        <MobileNav open={showMenu} switch={toggleMenu}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()}, {t(`site.footer`)}
          </footer>
       </div>
     </div>
   )
 }

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }

 export default withTrans(Layout)
