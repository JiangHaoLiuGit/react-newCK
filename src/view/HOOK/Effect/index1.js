import React ,{useState,useEffect} from 'react'

export default function Effect() {
    // 可以和useState一样写多个,并且是按顺序执行的
    let [n , setN] = useState(0)
    // 含有副作用的代码(应该用hookEffect包起来)
    // document.title = `Effect ${n}`
    useEffect(()=>{
        console.log('第一次调用')
        document.title = `Effect ${n}`
    })
    useEffect(()=>{
        console.log('第二次调用')
    })
    return (
        <div>
            <h1>Effect</h1>
            <h2>{n}</h2>
            <button onClick={()=>{
                setN(n+1)
            }}>+</button>
        </div>
    )
}
