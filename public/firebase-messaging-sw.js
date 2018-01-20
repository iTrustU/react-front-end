importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

const firebaseConfig = {
  messagingSenderId: '958984208691'
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload){
  const { data } = payload;
  const title = data.title;
  const option = {
    body: data.message
  }
  return self.registration.showNotification(title, option);
})
