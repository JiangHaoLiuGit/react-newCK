import React , {useState,useEffect} from 'react'


export default function Ref(){
    let [n,setN] = useState(10)
    useEffect(()=>{
        let time = setTimeout(()=>{
            console.log("n:",n)
            if(n == 0){
                clearTimeout(time)
            }else{
                setN(n-1)
            }
        },1000)
        return () => {
            clearTimeout(time)
        }
    },[n])
    return <>
        <h1>Ref Hook</h1>
        <h1>{n}</h1>
    </>
}