import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

// 首先创建一个root根元素root
const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  let app = (<>
    <App />
    <App />
  </>)
  root.render(app)
}

render()
