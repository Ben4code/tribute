import React from "react"
import { NavLink } from "react-router-dom"
import Angel_1 from '../../images/Angel_1.png'
import Angel_2 from '../../images/Angel_2.png'


const Header = () => {

  return (
    <nav id="nav" className="transparent z-depth-0">
      <div className="nav-wrapper ">
        <NavLink to="" className="logo">
          <img className="angel" src={Angel_1} alt="angel" width="40" />
          <span>Tributes to Daddy {' '}</span>
          <img className="angel" src={Angel_2} alt="angel" width="40" />
        </NavLink>
        <ul className="right">
          <li><NavLink exact activeClassName="chosen" to="">Home</NavLink></li>
          <li><NavLink exact activeClassName="chosen" to="/about">About</NavLink></li>
          <li><NavLink exact activeClassName="chosen" to="/donate" > <span className="cta">Donations</span> </NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
