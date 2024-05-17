import React ,{useEffect , useState} from 'react'
import {getStudents} from '../../../serveices/students'
import StudentContainer from "./studentContainer.js"
export default function FunTest(props){
    let [date , setDate] = useState([])
    let [pageSize , setPageSize] = useState(10)
    let [pageNum , setPageNum] = useState(1)
    useEffect(()=>{
        // 请求分页数据
        (async() =>{
            let str = await getStudents({
                pageSize:pageSize,
                pageNum:pageNum
            })
            if(str.meta.status == 200){
                setDate(str.message.goods)
            }
        })()
    },[pageSize,pageNum])
    return <>
        <StudentContainer uls={date} />
    </>
}