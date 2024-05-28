import {useEffect , useState} from 'react'
import {getStudents} from '../../serveices/students.js'

export default function getSutdentsList(){
    const [students , setStudents] = useState([])
    useEffect(()=>{
        (async ()=>{
            let stu = await getStudents({})
            if(stu.meta.status == 200){
                setStudents(stu.message.goods)
            }else{
                setStudents([])
            }
            console.log("students",students)
        })()
    },[])
    return students
}