import React from 'react'
import ctx from '../../context'
export default function Welcome() {
  return (
    <ctx.Consumer>
      {val => (
        <div>
          <h1>欢迎来到学生管理系统</h1>
          <p style={{
            margin:"20px 0",
            textAlign:"right",
            paddingRight:"70px"
          }}>作者:{val.name}</p>
        </div>
      )}
    </ctx.Consumer>
    
  )
}
