import React,{useState} from 'react'

/**
 * 
 * @param {*} reducer 自己写的处理业务数据的函数
 * @param {*} initialState 数据的初始默认值
 * @returns 
 */
export default function useReducer(reducer,initialState){
    let [state , setState] = useState(initialState)
    function dispatch(action){
        let newN = reducer(state,action)
        console.log(`日志:从${state} => 变成 ${newN}`)
        setState(newN)
    }
    return [state , dispatch]
}