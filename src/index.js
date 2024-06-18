import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App3.js'

// 首先创建一个root根元素root
const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  let app = (<>
    <App />
  </>)
  // let app = [1,"我是",<p>???</p>]
  root.render(app)
}

render()
