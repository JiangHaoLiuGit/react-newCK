import React from 'react'

export default function FunCom(props){
    if(props.age){
        return <h1>我是函数组件 我的年龄:{props.age}</h1>
    }else{
        return <>
                <h1>我是函数组件 我叫{props.obj.name}</h1>
                <span>年龄:{props.obj.age}</span>
            </>
    }
    
}