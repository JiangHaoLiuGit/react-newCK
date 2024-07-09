import React ,{useReducer} from 'react'

function reducer(state,obj){
    switch(obj.type){
        case 'addN':
            return state + 1;
        case 'subN':
            if(state > 0){
                return state - 1
            }else{
                return 0
            }
        default:
            return '未知'
    }
}

export default function Reducer(){
    
    let [n , dispatch] = useReducer(reducer,0)
    return <>
        <button onClick={()=>{dispatch({type:'subN'})}}>-</button>
        <div>
            {n}
        </div>
        <button onClick={()=>{dispatch({type:'addN'})}}>+</button>
    </>
}