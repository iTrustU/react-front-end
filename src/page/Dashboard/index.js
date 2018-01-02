import React from 'react'
import Home from './Home'
import firebase from '../../utils/firebase'

export default (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
  })
}