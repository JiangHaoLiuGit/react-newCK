import React , {useReducer} from 'react'

/**
 * 
 * @param {*} n 代表要处理的数据
 * @param {*} action 代表处理的数据要进行什么操作
 * @returns 
 */
function reducer(state,action){
    switch (action.type){
        case 'addNumber':
            return state+1;
        case 'cutNumber':
            if(state > 0){
                return state-1;
            }else{
                return state;
            }
        default:
            return state
    }
}

export default function Reducer(){
    let [n , dispatch] = useReducer(reducer,0)
    return <>
        <button onClick={()=>{
            dispatch({type:"cutNumber"})
        }}>-</button>
        {n}
        <button onClick={()=>{
            dispatch({type:"addNumber"})
        }}>+</button>
    </>
}