import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { requestPermission } from './utils/notification'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

import App from './App'
const history = createHistory()
const middlewares = [
  thunk,
  routerMiddleware(history)
]
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
)


ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
requestPermission().then(res => {
  console.log(res);
})

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   }).catch(function(err) {
//     console.log('Service worker registration failed, error:', err);
//   });
// }
