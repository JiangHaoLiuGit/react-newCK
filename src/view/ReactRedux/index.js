import React,{useEffect,useState} from 'react'
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
    const [count , setCount] = useState(0)
    // setInterval(()=>{
    //   console.log(`count22 , ${count}`)
    // },1000)
    useEffect(()=>{
      const inters = setInterval(()=>{
        setCount(count+1)
        console.log(`count1 , ${count}`)
      },1000)
      return () => clearInterval(inters)
    },[])
  return <>
    <h2>{count}</h2>
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


