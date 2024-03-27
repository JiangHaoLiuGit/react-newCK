import React from 'react';
import ReactDOM from 'react-dom/client';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css'

let imgArr = [src1,src2,src3]
let index = 0
let time = null
let imgDiv = document.getElementById("root")

function start(){
  if(!time){
    time = setInterval(()=>{
      console.log(index)
      index = (index + 1) % 3 
      render()
    },1000)
  }
}

function stop(){
  clearInterval(time)
  time = null
}

const root = ReactDOM.createRoot(document.getElementById('root'))

function render(){
  root.render(
    <React.StrictMode>
      <div id='img'>
        <img src={imgArr[index]} alt=''/>
      </div>
    </React.StrictMode>
  );
}

render()

start()

imgDiv.onmouseenter = () => {
  start()
}

imgDiv.onmouseleave = () => {
  stop()
}
