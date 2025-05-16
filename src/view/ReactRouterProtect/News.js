import {react} from 'react'
import data from './isLogin'
export default function News(props){
    return <>
        <h1>新闻页</h1>
        <h1>我是刘江浩,看到这里说明已经完成登录</h1>
        <button onClick={()=>{
            data.loginOut()
            console.log(props)
            props.history.push("/login")
        }}>退出登录</button>
    </>
}
