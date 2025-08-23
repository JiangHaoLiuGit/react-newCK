import React , {useState,useRef,useEffect} from 'react'

// 有一个场景,默认值为10,每秒减一,到了5和0的时候才能渲染视图,其余情况基本不变怎么做
// nRef.current --不会重新渲染视图,可以判断如果 -- 后nRef.current == 5 || nRef.current == 0的时候setN(nRef.current)
export default function Ref(){
    let [b , setN] = useState(10)
    let nRef = useRef(b)
    console.log(nRef)
    useEffect(()=>{
        let time = setInterval(()=>{
            console.log("nRef:",nRef)
            nRef.current --
            setN(nRef.current)
            if(nRef.current == 0){
                clearInterval(time)
            }
        },1000)
        return () => {
            clearInterval(time)
        }
    },[])
    return <>
        <h1>Ref Hook</h1>
        <h1>{b}</h1>
    </>
}