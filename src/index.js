import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
// import {store} from './store'
// 提供器
// import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(
    // <React.StrictMode>
    // <Provider store={store}>
      <App>
      </App>
    // </Provider>
    // </React.StrictMode>
  )
}

render()

