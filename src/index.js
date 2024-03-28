import React from 'react';
import ReactDOM from 'react-dom/client';
import BailList from './component/BailList.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(<BailList number={10}/>)
}

render()
