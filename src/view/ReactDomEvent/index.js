import React from 'react'
let parent
export default function Test(){
    return <div onClick={(e) => {
        e.type = "keyUp"
        console.log("我是虚拟dom中的父级div")
        console.log("e:",e,"parent:",parent,"parent === e:",parent === e)
    }}> 
        <input type="text" onFocus={e=>{
            console.log("input e啊")
        }} />
        <button onClick={(e) => {
            // 这里阻止事件冒泡阻止不了真实DOM的事件冒泡
            // e.stopPropagation()
            
            console.log("虚拟dom元素:button点击",e)
            parent = e
            setTimeout(()=>{
                //这里很神奇打印第五行设置的 "keyUp" 说明什么?说明react元素生成的dom事件中的e全局公用一个event对象
                console.log(e.type)
            },1000)
            console.log(e.nativeEvent)
        }}>点击</button>
    </div>
}

document.querySelector("#root").onclick = e => {
    console.log("真实dom元素:root元素点击",e)
    // 真实dom中阻止冒泡,注意,这里会阻止后续react中所有虚拟dom的事件运行
    e.stopPropagation()
}
document.querySelector("#app").onclick = e => {
    console.log("真实dom元素:app元素点击",e)
}
document.getElementsByTagName("body")[0].onclick = e => {
    console.log("真实dom元素:body元素点击")
}