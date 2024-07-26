import React from 'react'
import ctx from './context'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <ctx.Consumer>
      {val => (
        <>
          <h1>学生管理系统</h1>
          <div className='info'>
            <span>{val.name}</span>
            <Link to="/login">
              <span style={{color:"#fff"}} onClick={()=>{
                val.changeName('')
              }}>退出</span>
            </Link>
          </div>
        </>
      )}
      
    </ctx.Consumer>
  )
}
