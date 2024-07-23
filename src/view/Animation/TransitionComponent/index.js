import React ,{useState}from 'react'
import FadeTransition from '../../../component/FadeTransition'
import {TransitionGroup} from 'react-transition-group'
import {v4} from 'uuid'

export default function TransitionComponent(){
    const [hide , setHide] = useState(true)
    const [arr , setArr] = useState([
        {
            name:"项目一",
            id:v4()
        },
        {
            name:"项目二",
            id:v4()
        }
    ])
    return <>
        
        <TransitionGroup>
            {arr.map(it => (
                <FadeTransition key={it.id} appear timeout={1000} in={hide}>
                    <li style={{
                        margin:"20px 0"
                    }}>
                        <span>{it.name}</span>
                        <button onClick={()=>{
                            setArr(arr.filter(item=>item.id!==it.id))
                        }} style={{
                            margin:"0 20px"
                        }}>删除</button>
                    </li>
                </FadeTransition>
            ))}
        </TransitionGroup>
        <button onClick={()=>{
            let person = window.prompt("请输入项目名称")
            setArr([...arr,{
                name:person,
                id:v4()
            }])
        }}>新增</button>
    </>
}