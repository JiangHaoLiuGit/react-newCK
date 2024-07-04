import {useState , useEffect} from 'react'
import {getStudents} from '../serveices/students'

export default function allStudents(){
    let [student , setStudent]= useState([])
    useEffect(()=>{
        (async ()=>{
            let stu = await getStudents({})
            setStudent(stu.message.goods)
        })()
    },[])
    return student
}