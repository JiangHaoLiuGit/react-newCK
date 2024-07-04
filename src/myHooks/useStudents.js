import {useState , useEffect} from 'react'
import {getStudents} from '../serveices/students'

export default function allStudents(page,pageSize){
    let [resp , setResp]= useState({})
    useEffect(()=>{
        (async ()=>{
            let res = await getStudents({pageNum:page,pageSize})
            setResp(res)
        })()
    },[page,pageSize])
    return resp
}