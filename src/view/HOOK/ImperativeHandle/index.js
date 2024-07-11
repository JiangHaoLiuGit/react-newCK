import React ,{useRef,useImperativeHandle} from 'react'

// 用函数组件达成同样类似的功能,目前是不能写的,除非用useImperativeHandle()

function Test(props,refs){
    useImperativeHandle(refs , ()=>{
        return {
            methods(){
                console.log("Test is Methods ing2...")
            }
        }
    },[])
    return <h1>我是Test的h1</h1>
}

const TestCom = React.forwardRef(Test)

// class Test extends React.Component{
//     methods(){
//         console.log("Test is Methods ing...")
//     }
//     render(){
//         return <h1>我是Test的h1</h1>
//     }
// }

export default function ImperativeHandle(){
    let refs = useRef()
    return <>
        <h1>ImperativeHandle Hook</h1>
        <TestCom ref={refs}></TestCom>
        <button onClick={()=>{
            console.log(refs)
            refs.current.methods()
        }}>调用Test组件中的Methods方法</button>
    </>
}