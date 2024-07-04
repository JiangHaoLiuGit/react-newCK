import React,{useState} from 'react'
import allStudents from '../../../myHooks/useStudents'

export default function MyHooks(){
    let [page , setPage] = useState(1)
    let pageSize = 10
    let stu = allStudents(page,pageSize)
    if(stu && stu.message){
        let lis = stu.message.goods.map(it=> (<li key={it.goods_id}>{it.goods_name}</li>))
        return <>
        <h1>数据总数:{stu.message.total}</h1>
            <ul>
                {lis}
            </ul>
            <input type="number" value={page} onChange={e=>{
                setPage(e.target.value)
            }} />
        </>
    }
    return null
}