import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

let image = "https://img0.baidu.com/it/u=3628503530,464378779&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1711645200&t=38ba4f67f8c1f91c40a8d8362f627b40"
let classN = 'img'
let obj = {
  a:10,
  b:5
}
let div = (
  <div>
    <img src={image} className={classN} style={{
      marginLeft:"50px"
    }} alt=''/>
    <h1>{obj.a} * {obj.b} = {obj.a * obj.b}</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root')).render(div);


