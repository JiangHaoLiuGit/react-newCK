import React,{useContext} from 'react'
const ctx = React.createContext()

// function Son(){
//     return<>
//     <ctx.Consumer>
//         {value => (
//             <>
//                 <h1>子组件{value.name}</h1>
//             </>
//         )}
//     </ctx.Consumer>
//     </>
// }
// 这么写优势:1.代码更加简洁2.把组件层次中的ctx.Consumer层给干掉了,组件层次更简单
function Son(){
    let state = useContext(ctx)
    return <h1>子组件{state.name}</h1>
}
export default function Context(){
    return <>
    <h2>?</h2>
        <ctx.Provider value={{name:"abb"}}>
            <Son />
        </ctx.Provider>
    </>
}