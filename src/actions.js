import { push } from 'react-router-redux'
import firebase from './utils/firebase'
 import { post as servicePost} from './service'

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

export const registerHandler = (loginData = {}) => dispatch => {
  const { email, password,aajiId } = loginData
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(firebase => {
        servicePost({url:'users/register',body:{email,password:"secret",insuranceAgentId:aajiId}})
        .then(res => {
          const userData = {
            ...res.data,
            email:firebase.email,
            deviceToken:localStorage.getItem('pushNotifToken')||''
          }
          console.log(userData);
          dispatch(updateIsAuthenticated(!!firebase, userData))
          // servicePost({
          //   url:'users/update-device-token',
          //   access_token:res.data.token,
          //   body:{email:firebase.email, deviceToken:localStorage.getItem('pushNotifToken')||''}
          // })
        }).catch(err => {
          console.log(err);
        })

      })
      .catch(error => {
        console.log(error.message, 'ERROR ON LOGIN HANDLER')
      })
}

export const updateIsAuthenticated = (isAuthenticated, userData = {}, browserHistory = null) => (dispatch) => {
  if (isAuthenticated) {
    dispatch(storeUserData(userData))
    dispatch(authenticateSuccess())
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
