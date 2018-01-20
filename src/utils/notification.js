import firebase from './firebase';
const messaging = firebase.messaging()

const getToken = () => {
  return new Promise((res,rej) => {
    messaging.getToken()
    .then(function(currentToken) {
      if (currentToken) {
        res(currentToken)
      } else {
        // Show permission UI.
        rej({error:'No Instance ID token available. Request permission to generate one.' })
      }
    })
    .catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
    });
  })

}

export const requestPermission = () => {
  return new Promise((res,rej) => {
    messaging.requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      getToken().then(token => {
        res({token:token})
      })
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
      rej(err)
    });
  })
}
