import React from "react"
import { NavLink } from "react-router-dom"
import Angel_1 from '../../images/Angel_1.png'
import Angel_2 from '../../images/Angel_2.png'
// import firebase from '../../config/firebase'
// import AuthContext from '../context/authContext/authContext'



const Header = () => {
  // const authContext = useContext(AuthContext);
  //const { user, setUser } = authContext;

  // const logoutLink = () => {
  //   firebase.auth().signOut()
  //     .then(() => {
  //       localStorage.removeItem('myValueInLocalStorage');
  //       setUser(null)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <nav id="nav" className="transparent z-depth-0">
      <div className="nav-wrapper ">
        <NavLink to="" className="logo">
          <img src={Angel_1} alt="angel" width="40" />
          <span>Tributes to Daddy {' '}</span>
          <img src={Angel_2} alt="angel" width="40" />
        </NavLink>
        <ul className="right">
          <li><NavLink exact activeClassName="chosen" to="">Home</NavLink></li>
          <li><NavLink exact activeClassName="chosen" to="/about">About</NavLink></li>
          <li><NavLink exact activeClassName="chosen" to="/donate" > <span className="cta">Fundraise</span> </NavLink></li>
          {/* {
            user !== null
              ?
              (
                <>
                  <li><NavLink to="" className="btn-floating btn-small blue"> <i className="fa fa-user"></i>  </NavLink></li>
                  <li><NavLink to="/" activeClassName="chosen" onClick={logoutLink}>Logout</NavLink></li>
                </>
              )
              :
              (
                <>
                  <li><NavLink activeClassName="chosen" to="/signup">Register</NavLink></li>
                  <li><NavLink activeClassName="chosen" to="/signin">Login</NavLink></li>
                </>
              )
          } */}
        </ul>
        
      </div>
    </nav>
  )
}




export default Header
