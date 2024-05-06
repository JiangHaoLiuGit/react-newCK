import React from 'react'
// 2.0用render props方式巧妙实现
import MoveSmall from './MoveSmall' //2.0
export default class Test extends React.Component{
    render(){
        return <>
            <MoveSmall>
                {/* 用this.props.children接受,其实还可以写多个,比如26行写法,可以传第二种元素过去,有点类似于vue插槽 */}
                {val=><>
                    <div style={{
                        width:100,
                        height:100,
                        position:"absolute",
                        left:val.x,
                        top:val.y,
                        background:"red"
                    }}></div>
                </>}
            </MoveSmall>
            <MoveSmall>
                {val=><>
                    <div>横坐标x:{val.x},纵坐标y:{val.y}</div>
                </>}
            </MoveSmall>
            {/* 甚至还能这么写 */}
            {/* <MoveSmall renderA={val=><>
                    <div style={{
                        width:100,
                        height:100,
                        position:"absolute",
                        left:val.x,
                        top:val.y,
                        background:"red"
                    }}></div>
                </>}>
                
            </MoveSmall>
            <MoveSmall renderA={val=><>
                    <div>横坐标x:{val.x},纵坐标y:{val.y}</div>
                </>}>
                
            </MoveSmall> */}
        </>
    }
}