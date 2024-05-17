import React from 'react'
import StudentLis from './studentLis'
export default function StudentContainer(props){
    let lis = props.uls.map(it => <StudentLis key={it.goods_id} {...it}/>)
    return <ul>
        {lis}
    </ul>
}