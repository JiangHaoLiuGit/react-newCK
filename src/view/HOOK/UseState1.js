import React,{useState, useSyncExternalStore} from 'react'
export default function UseState(props){
    const [n,setN] = useState(0)
    const [data , setData ] = useState({x:1,y:2});
    return <>
    {/* 不要用这种判断,重新渲染会频繁更新dom */}
        {/* {
            visible?(<p></p>):null
        } */}
        
            <button onClick={()=>{
                setN(n+1)
            }}>+</button>
            <h1>{n}</h1>
            <button onClick={()=>{
                setN(n-1)
            }}>-</button>
        <div>
            x:{data.x},y:{data.y}
        </div>
        <button onClick={()=>{setData({
            ...data,//如果把这个删了你就知道和this.setState差距了,这个是直接替换,this.setState是混合
            x:3
        })}}>
            隐藏/显示
        </button>

        
    </>
}
