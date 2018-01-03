import React, { Component } from 'react'
import { connect } from 'react-redux'
class Dashboard extends Component {
  render () {
    const {
      displayName,
      email
    } = this.props.userData
    return (
      <div>
        <h1>Hallo {displayName} : {email}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.authReducer.userData
})

export default connect(mapStateToProps)(Dashboard)
