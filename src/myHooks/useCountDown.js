
import {useEffect} from 'react'

export default function useCountDown(fun , seconds){
    useEffect(()=>{
        let time = setInterval(fun,seconds)
        return () => {
            clearInterval(time)
        }
    }, [])
}