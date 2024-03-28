import React from 'react';
import ReactDOM from 'react-dom/client';

let div = (
  <h1>React</h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
function render(){
  root.render(div)
}

render()
