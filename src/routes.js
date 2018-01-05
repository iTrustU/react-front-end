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
import NotFoundPage from './page/NotFoundPage'
import firebase from './utils/firebase'
import { updateIsAuthenticated } from './actions'

class Routes extends React.Component {
  state = {
    hasChecked: false
  }
  componentWillMount () {
    firebase
      .auth()
      .onAuthStateChanged(userData => {
        if (userData) {
          this.props.dispatch(updateIsAuthenticated(true, userData))
        } else {
          this.props.dispatch(updateIsAuthenticated(false))
        }
        this.setState({ hasChecked: true })
      })
  }

  render () {
    return (
      !this.state.hasChecked
      ? <h1>Loading...</h1>
      : (<Router>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>)
    )
  }
}

export default connect()(Routes)