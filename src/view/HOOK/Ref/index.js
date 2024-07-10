import React , {useState,useRef,useEffect} from 'react'


export default function Ref(){
    let [b , setN] = useState(10)
    let nRef = useRef(b)
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