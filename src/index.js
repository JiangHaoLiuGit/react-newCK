import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp from './component/Comp.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(<Comp />)
}

render()
