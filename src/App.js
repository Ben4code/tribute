import React from 'react'
import './components/layout/layout.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AuthState from './components/context/authContext/authState'



const App = () => {

  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthState>
  )
}

export default App
