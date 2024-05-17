import React from 'react'

export default function StudentLis(props){
    return <li>
        <span style={{
            display:'inline-block',
            width:700,
            paddingRight:20,
        }}>
            名字:{props.goods_name}
        </span>
        <span style={{
            width:150,
            display:'inline-block',
            paddingRight:20,
        }}>
            价格:{props.goods_price} 人民币
        </span>
        <span style={{
            display:'inline-block',
            paddingRight:20,
        }}>
            goods_id:{props.goods_id}
        </span>
    </li>
}