import React , {useState,PureComponent,useMemo} from 'react'

class Son extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        console.log("render Son")
        return <>
            <h1>啊?{this.props.val}</h1>
            <button onClick={()=>{
                this.props.setVal()
            }}>点击+1</button>
        </>
    }
}

export default function Memo(){
    console.log("render Callback")
    let [n , setN] = useState(10)
    let [numbers , setNumber] = useState(0)
    const handleFun = useMemo(()=>{
        return ()=>{
            setN(n + 1)
        }
    },[n])
    return <>
        <Son val={n} setVal={handleFun}/>
        {/* 改变input的值为什么Son也更新呢?他不是纯函数吗?因为setVal对应的函数(对象)每次地址都会变,所以即使是纯函数也会重新render */}

        {/* 所以可以用useCallback()他会返回一个固定引用的函数,这样的话就不会让纯函数每次都更新了!!! */}
        <div>
            <input type="number" value={numbers} onChange={e=>{
                setNumber(e.target.value)
            }} />
        </div>
    </>
}