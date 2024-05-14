import React,{useState, useSyncExternalStore} from 'react'
export default function UseState(props){
    const [n,setN] = useState(0)//使用一个状态,该状态的默认值是0
    //n得到状态值
    //setN,得到一个函数,用于改变状态
    const [visible , setVisible ] = useState(true);
    const [,setNull] = useState({})
    return <>
        <div style={{display:visible?'block':'none'}}>
            <button onClick={()=>{
                setN(n+1)
                // setN(n+1)
                // 写两遍setN(n+1)是没有用的,他会把他收集起来,最后一起调用,并且这两次的n的值都是0
                // 如果要执行两遍可以这么写
                // setN(prev => prev+1)
                // setN(prev => prev+1)
            }}>+</button>
            <h1>{n}</h1>
            <button onClick={()=>{
                setN(n-1)
                setN(n-1)
            }}>-</button>
        </div>
        <button onClick={()=>{setVisible(!visible)}}>
            隐藏/显示
        </button>
        <button onClick={()=>{setNull()}}>重新渲染</button>
    </>
}



// class TestClass extends React.Component{
//     render(){
//         console.log("cl , render")
//         return <>
//             <h1>类组件</h1>
//             <button onClick={()=>{
//                 this.forceUpdate()
//             }}>刷新</button>
//         </>
//     }
// }
