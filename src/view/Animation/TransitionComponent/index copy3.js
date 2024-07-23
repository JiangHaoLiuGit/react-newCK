import React ,{useState}from 'react'
import FadeTransition from '../../../component/FadeTransition'
import {SwitchTransition} from 'react-transition-group'

export default function TransitionComponent(){
    const [hide , setHide] = useState(true)
    return <>
        {/* 适用有先后顺序的动画,切换一次是一进一出这种动画 */}
        <SwitchTransition>
            <FadeTransition key={hide} appear timeout={1000} in={hide}>
                <h1>{hide?"郝煜":"江浩"}</h1>
            </FadeTransition>
        </SwitchTransition>
        <button onClick={()=>{setHide(!hide)}}>显示/隐藏</button>
    </>
}