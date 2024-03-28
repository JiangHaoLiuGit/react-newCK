import React from 'react';
import ReactDOM from 'react-dom/client';
import Tick from './component/Tick.js'
// import Test from './component/Test.js'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Tick number={5}/>
    {/* <Test number={5}/> */}
  </>
);


