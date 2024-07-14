import React ,{useState,useEffect,useDebugValue} from 'react'

function Son(){
    
    const [student,setStudent] = useState([2,6,8,"dfl"])
    useDebugValue("我是bug")
    return student
}

export default function DebugValue(){
    useState(0)
    useState("dce")
    useEffect(()=>{
        console.log("生活不如意")
    },[])
    return <>
        <h1>DebugValue Hook</h1>
        <Son></Son>
    </>
}