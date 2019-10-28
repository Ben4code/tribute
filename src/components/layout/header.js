import { Link } from "react-router-dom"

import React from "react"
import Angel_1 from '../../images/Angel_1.png'
import Angel_2 from '../../images/Angel_2.png'

const Header = ( ) => (
  
    <nav id="nav" className="transparent z-depth-0">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          <img src={Angel_1} alt="angel" width="40"/>
          Tributes to Daddy {' '}
          <img src={Angel_2} alt="angel" width="40"/>
          </Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/donate" > <span className="cta">Donate to family</span> </Link></li>
        </ul>
      </div>
    </nav>
)

export default Header
