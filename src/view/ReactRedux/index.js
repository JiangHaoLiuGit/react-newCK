import React from 'react'
import {connect} from 'react-redux'
import {ReducerOne} from '../../store/Reducer/reducer'

// state的一个映射
const mapStateToProps = (state) => {
    console.log("state")
    console.log(state)
    return {
        str:state.str
    }
}

function Test(props) {
    console.log("props")
    console.log(props)
  return <>
    <h1>
      ReactRedux {props.str}
    </h1>
    <button onClick={props.changeStr}>改变</button>
  </>
}

const mapDispatchToFunction = dispatch => {
    return {
        changeStr:()=>{
            let active = {type:"change_active",str:"我是猪"}
            dispatch(active)
        }
    }
}

// connect(state映射)(组件)
export default connect(mapStateToProps,mapDispatchToFunction)(Test)


