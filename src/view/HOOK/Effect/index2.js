import React ,{useState,useEffect} from 'react'

const ref = React.createRef()
function stop(){
    clearInterval(window.timer)
    window.timer = null
}
window.timer = null
function Ball(props){
    useEffect(()=>{
        let timetotal = 10000
        let timeSm = 16
        let timeNumber = parseInt(timetotal / timeSm)
        let num = 0
        let deepX = props.left / timeNumber
        let deepY = props.top / timeNumber
        window.timer = setInterval(()=>{
            num ++
            if(ref.current){
                ref.current.style.left = num * deepX + "px"
                ref.current.style.top = num * deepY + "px"
            }else{
                stop()
            }
            if(num == timeNumber){
                stop()
            }
        },timeSm)
        // 返回清理函数
        return stop
    })

    return <div ref={ref} style={{
        position:"fixed",
        left:0,
        top:0,
        width:100,
        height:100,
        background:"#f40"
    }}>

    </div>
}
export default function Effect() {
    let [n , setN ] = useState({x:0,y:0})
    let [visible , setVisible ] = useState(true)
    return (
        <div>
            <div>
                {visible?(
                    <div>
                        <Ball left={n.x} top={n.y}/>
                        <div style={{paddingTop:"300px"}}>
                            x:<input type="number" value={n.x} onChange={e=>{
                                setN({
                                    ...n,
                                    x:e.target.value
                                })
                            }} /> 
                            <br />
                            y:<input type="number" value={n.y} onChange={e=>{
                                setN({
                                    ...n,
                                    y:e.target.value
                                })
                            }}  /> 
                        </div>
                    </div>
                ):null}
            </div>
            <button onClick={()=>{
                setVisible(!visible)
            }}>显示/隐藏</button>
            
        </div>
    )
}
