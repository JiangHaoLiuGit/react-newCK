import React ,{useState,useEffect} from 'react'

const ref = React.createRef()
function stop(){
    console.log("清理函数")
}
function Ball(props){
    // 此案例表示第二个参数可以为空数组的情况,强制刷新组件的时候不会执行副作用函数
    useEffect(()=>{
        console.log("副作用函数")
        // 返回清理函数
        return stop
    },[])

    return <div ref={ref} style={{
        position:"fixed",
        left:300,
        top:0,
        width:100,
        height:100,
        background:"#f40"
    }}>

    </div>
}
export default function Effect() {
    let [, forceUpdate ] = useState({})
    let [visible , setVisible ] = useState(true)
    console.log("render !!!")
    return (
        
        <div>
            <div>
                <Ball/>
                {visible?(
                    <div>
                        <button onClick={()=>{
                            forceUpdate({})
                        }}>页面刷新</button>
                    </div>
                ):null}
            </div>
            <button onClick={()=>{
                setVisible(!visible)
            }}>显示/隐藏</button>
            
        </div>
    )
}
