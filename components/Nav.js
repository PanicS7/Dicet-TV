import React, {useState} from "react";
import ReactDOM from "react-dom";

import nav_styles from "../styles./Nav_styles.js";

function Nav() {
  const [showNav,setShowNav] = useState(false)
  
  function handleMenuClick () {
    setShowNav((prevState) => !prevState)
  } 
   
  return (
    <div style={nav_styles.common}>
      <header style={nav_styles.navBar}>
        <img src="./IMAGES/logo.png" alt="DicetTV"/>
        <i onClick={handleMenuClick} className="fa fa-bars" aria-hidden="true"></i>
      </header>
      
      <nav style={showNav ? nav_styles.show : nav_styles.hide}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <button>Get started</button>
        <div>
          <img src="./IMAGES/user-icon.png"/>
          <img src="./IMAGES/bag-icon.png"/>
          <img src="./IMAGES/search-icon.png"/>
        </div>
      </nav>
    </div>
  )
}

export default Nav;