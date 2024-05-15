import React ,{useState,useEffect} from 'react'

function stop(){
    console.log("清理函数")
}
function Ball(props){
    // 此案例表示副作用中有闭包的时候,比如存在setTimeout的时候,n指向的是旧值(闭包函数当时的n),而不是实时父组件的n值!!
    useEffect(()=>{
        console.log("副作用函数")
        // 返回清理函数
        setTimeout(()=>{
            console.log(props.n)
            // 点六下试一下打印什么
            // 五秒后打印0
            // 然后依次 1 2 3 4 5 6,这个是闭包的特效,和react无关
        },5000)
        return stop
    },[props.n])
    return <div>Ball</div>
}
export default function Effect() {
    let [n, setN ] = useState(0)
    let [visible , setVisible ] = useState(true)
    return (
        
        <div>
            <div>
                <Ball n={n}/>
                {visible?(
                    <div>
                        <h1>{n}</h1>
                        <button onClick={()=>{
                            setN(n+1)
                        }}>n+1</button>
                    </div>
                ):<div>空</div>}
            </div>
            <button onClick={()=>{
                setVisible(!visible)
            }}>显示/隐藏</button>
            
        </div>
    )
}
