import React , {useState,PureComponent,useMemo} from 'react'

function Son(props){
    console.log("来了" , props.value)
    return <li>{props.value}</li>
}

export default function Memo(){
    console.log("render Callback")
    let [obj] = useState({min:0,max:1000})
    let [numbers , setNumber] = useState(0)
    // 平常写法,如果input变化,这里的会重新渲染Son 1000次!!!!性能太浪费
    // let list = (()=>{
    //     let lis = []
    //     for(let i = obj.min ; i < obj.max ; i ++){
    //         lis.push(<Son key={i} value={i} />)
    //     }
    //     return lis
    // })()
    // 所以引入useMemo函数优化性能,和callbackHook有点类似
    let list = useMemo(()=>{
        let lis = []
        for(let i = obj.min ; i < obj.max ; i ++){
            lis.push(<Son key={i} value={i} />)
        }
        return lis
    },[obj.min,obj.max])
    console.log(list);
    return <>
        <div>
            <input type="number" value={numbers} onChange={e=>{
                setNumber(e.target.value)
            }} />
            <ul>
                {list}
            </ul>
        </div>
    </>
}