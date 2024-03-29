import React from 'react';
import ReactDOM from 'react-dom/client';
import TickControl from './component/TickControl.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(<TickControl/>)
}

render()
