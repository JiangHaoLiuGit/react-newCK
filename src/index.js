import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(
    // <React.StrictMode>
      <App>
      </App>
    // </React.StrictMode>
  )
}

render()

