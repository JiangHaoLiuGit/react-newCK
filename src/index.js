import React from 'react';
import ReactDOM from 'react-dom/client';
import Tem from './tem.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(<Tem children2={<h2>我是父元素2内容</h2>}  children3="我是父元素3内容">
    <h1>我是父元素1内容</h1>
  </Tem>)
}

render()
