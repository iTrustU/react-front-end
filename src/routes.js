import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import SignIn from './page/Auth/SignIn'
import SignUp from './page/Auth/SignUp'
import Dashboard from './page/Dashboard'
import Profile from './page/profile'
import Home from './page/home'
import NotFoundPage from './page/NotFoundPage'
// import firebase from './utils/firebase'
import { updateIsAuthenticated } from './actions'

class Routes extends React.Component {
  state = {
    hasChecked: false
  }
  componentWillMount () {
    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log('routes', userData);
    if (userData) {
      this.props.dispatch(updateIsAuthenticated(true, userData))
    } else {
      this.props.dispatch(updateIsAuthenticated(false))
    }
    this.setState({ hasChecked: true })
  }

  render () {
    return (
      !this.state.hasChecked
      ? <h1>Loading...</h1>
      : (<Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile/:id' component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>)
    )
  }
}

export default connect()(Routes)
