import React , {useState} from 'react'
import useCountDown from '../../../myHooks/useCountDown'

function Test(){
    useCountDown(()=>{
        console.log("打印倒计时函数")
    },1000)
    return <h1>倒计时组件</h1>
}

export default function MyHooks(){
    let [visable , setVisable] = useState(true)
    return <>
        {
            visable && <Test />
        }
        <button onClick={()=>{
            setVisable(!visable)
        }}>显示/隐藏</button>
    </>
}