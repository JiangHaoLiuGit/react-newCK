import React from 'react'

export default function Student(props){
    return <li>
        <h1>标题:{props.title} ---------- <span>useId:{props.id}</span></h1>
        
    </li>
}