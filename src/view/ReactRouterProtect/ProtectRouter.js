import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import data from './isLogin'
import Login from './Login'
// children , component:Component , render 为什么结构这三个属性,这三个属性不能给这个组件,所以要抽离出来
// 剩下的属性path 默认的直接都给
export default function ProtectRouter(props) {
  console.log(props);
  let {children , component:Component , render , ...rest} = props
  return (
    <div>
      <Route {...rest} render={values=>{
        if(data.isLogin){
            return <Component />
        }else{
            return <Redirect to={{
                // pathname:"/login",
                // search:`?loginUrl=${values.location.pathname}`
                pathname:"/login",
                state:{
                    loginUrl:values.location.pathname
                }
            }}  />
        }
        
      }}></Route>
    </div>
  )
}
