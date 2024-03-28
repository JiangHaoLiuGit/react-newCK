import React from 'react';
import ReactDOM from 'react-dom/client';
import FunCom from './component/FunCom.js'
import ClassComp from './component/ClassCom.js';
let div = (
  <div>
    <h1>React</h1>
    <FunCom age="3"/>
    <FunCom age={4}/>
    <FunCom age={5}/>
    <FunCom obj={{
      name:"江浩",
      age:25
    }}/>
    <ClassComp age="3"/>
    <ClassComp age={4}/>
    <ClassComp age={5}/>
    <ClassComp obj={{
      name:"郝煜",
      age:25
    }}/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root')).render(div);


