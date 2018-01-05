import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutHandler } from '../../actions'
import { withRouter } from 'react-router-dom'
class Dashboard extends Component {
  render () {
    console.log(this.props.history);
    const {
      displayName,
      email
    } = this.props.userData
    return (
      <div>
        <h1>Hallo {displayName} : {email}</h1>
        <button onClick={() => this.props.dispatch(signOutHandler(this.props.history))}>
          Sign Out
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.authReducer.userData
})

export default withRouter(connect(mapStateToProps)(Dashboard))
