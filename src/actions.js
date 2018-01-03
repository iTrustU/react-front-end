import { push } from 'react-router-redux'
import firebase from './utils/firebase'

export const authenticateSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

export const authenticateFail = () => ({
  type: 'AUTH_FAIL'
})

export const storeUserData = (userData) => ({
  type: 'STORE_USER_DATA',
  payload: {
    userData
  }
})

export const signOutHandler = (browserHistory) => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(updateIsAuthenticated(false, {}, browserHistory))
    })
    .catch((err) => {
      console.log('ERROR AT SIGN OUT HANDLER', err)
    })
}

export const loginHandler = (event, loginData = {}) => dispatch => {
  const { name } = event.target
  const { email, password } = loginData
  if (name === 'email') {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        dispatch(updateIsAuthenticated(!!userData, userData))
      })
      .catch(error => {
        console.log(error.message, 'ERROR ON LOGIN HANDLER')
      })
  } else if (name === 'facebook') {
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .catch((error) => {
        const errorCode = error.code,
              errorMessage = error.message,
              email = error.email
        console.log(errorCode, errorMessage, email)
      })
  }
}

export const updateIsAuthenticated = (isAuthenticated, userData = {}, browserHistory = null) => (dispatch) => {
  if (isAuthenticated) {
    dispatch(authenticateSuccess())
    dispatch(storeUserData(userData))
    if (browserHistory) {
      browserHistory.push('/dashboard')
    } else {
      dispatch(push('/dashboard'))
    }
  } else {
    dispatch(authenticateFail())
    dispatch(storeUserData(userData))
    if (browserHistory) {
      browserHistory.push('/')
    } else {
      dispatch(push('/'))
    }
  }
}
