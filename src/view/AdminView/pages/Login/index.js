import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import ctx from '../../context'

export default function Login() {
  const [tit,setTit] = useState("")
  return (
    <ctx.Consumer>
      {val => (
        <div className='login'>
          <h1>登录页</h1>
          <input type="text" placeholder='请输入作者名称' value={tit} onChange={e=>{
            setTit(e.target.value)
          }} />
          <Link to="/"><span onClick={()=>{
            val.changeName(tit)
          }}>登录</span></Link>
        </div>
      )}
    </ctx.Consumer>
  )
}
