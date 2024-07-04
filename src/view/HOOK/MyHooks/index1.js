import React from 'react'
import allStudents from '../../../myHooks/useAllStudents'

export default function MyHooks(){
    let stu = allStudents()
    let lis = stu.map(it=> (<li key={it.goods_id}>{it.goods_name}</li>))
    return <ul>
        {lis}
    </ul>
}