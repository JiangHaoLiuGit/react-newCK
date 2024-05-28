import React from 'react'
import getSutdentsList from '../../../myHook/getSutdentsList'
// 封装的getSutdentsList()这个hook方法就是获取学生数组的
export default function UseCustom(props){
    let lists = getSutdentsList().map(it => <li key={it.goods_id} >{it.goods_name}</li>)
    return <ul>
        {lists}
    </ul>
}