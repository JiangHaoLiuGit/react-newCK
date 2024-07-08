import React , {useState,PureComponent} from 'react'

class Son extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        console.log("render Son")
        return <>
            <h1>{this.props.val}</h1>
            <button onClick={()=>{
                this.props.setVal()
            }}>点击</button>
        </>
    }
}

export default function Callback(){
    console.log("render Callback")
    let [n , setN] = useState(11)
    return <>
        <Son val={n} setVal={()=>{
            // 此时点击的话两个console.log都会输出
            // setN(Math.random())
            
            // 此时点击的话不会日志,为啥,因为setN他是useState第二个参数,他会把之前和现在的值用Object.is(new,old)比较,发现没有区别那就不更新了
            setN(11)
        }}/>
    </>
}