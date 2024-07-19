import React , {useState}from 'react'
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import {v4} from 'uuid'
import './index.css'
export default function TransitionGroups(){
    let [arrList , setArrList ] = useState([{
        name:"项目1",
        id:v4()
    },
    {
        name:"项目2",
        id:v4()
    }])

    return <>
        <TransitionGroup component="ul" className="uls">
            {arrList.map(it=>(
                <CSSTransition timeout={2000} key={it.id}>
                    <div style={{
                        margin:'15px 0'
                    }}>
                        <span style={{
                            display:'inline-block',
                            width:'200px'
                        }}>{it.name}</span>
                        <button onClick={()=>{
                            setArrList(arrList.filter(item => item.id !== it.id))
                        }}>删除</button>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
        <button onClick={()=>{
            let person = window.prompt("请输入内容")
            setArrList([...arrList,{name:person,id:v4()}])
        }}>增加</button>
    </>
}