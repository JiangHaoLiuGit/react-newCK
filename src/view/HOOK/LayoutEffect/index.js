import React ,{useRef,useState,useEffect,useLayoutEffect} from 'react'

export default function LayoutEffect(){
    const [n , setN] = useState(0)
    const refH2 = useRef()
    // 比useEffect优,Effect会闪烁一下
    useLayoutEffect(()=>{
        refH2.current.innerText = Math.random().toFixed(2)
    })
    // useEffect(()=>{
    //     refH2.current.innerText = Math.random().toFixed(2)
    // })
    return <>
        <h1>Hello LayoutEffect Hook</h1>
        <h2 ref={refH2}>{n}</h2>
        <button onClick={()=>{
            setN(n+1)
        }}>n+1</button>
    </>
}