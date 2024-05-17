import React, { PureComponent } from 'react'
import './index.css'
// 浅层比较,只会比较第一层
// import {isIdentical} from '../../utils/index.js'
export default class Task extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     if(isIdentical(nextProps,this.props) && isIdentical(nextState,this.state)){
    //         return false
    //     }
    //     return true
    // }
  render() {
    console.log("Task render")
    return (
      <li className={this.props.isFinite?'active':''}>
        {this.props.name}
      </li>
    )
  }
}
//函数组件这么实现纯函数功能
// function Task(props){
//     console.log("Task render")
//     return (
//         <li className={props.isFinite?'active':''}>
//           {props.name}
//         </li>
//       )
// }
// export default React.memo(Task)
// 下面是手动实现React.memo功能
// function memo(Comp){
//     return class Memo extends React.PureComponent{
//         render(){
//             return <>
//                 {Comp(this.props)}
//             </>
//         }
//     }
// }
// export default memo(Task)
