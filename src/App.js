import React from 'react'
import './components/layout/layout.css'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'



const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/donate" component={Donate}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signout" component={SignOut}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
