import React , {useState,PureComponent,useMemo} from 'react'

function Son(props){
    console.log("来了" , props.value)
    return <li>{props.value}</li>
}

export default function Memo(){
    console.log("render Callback")
    let [obj] = useState({min:0,max:1000})
    let [numbers , setNumber] = useState(0)
    
    let list = useMemo(()=>{
        let lis = []
        for(let i = obj.min ; i < obj.max ; i ++){
            lis.push(<Son key={i} value={i} />)
        }
        return lis
    },[obj.min,obj.max])
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