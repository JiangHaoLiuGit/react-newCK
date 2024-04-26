import React from 'react'

export function WithTest(Com){
    class LogWrapper extends React.Component{
        componentDidMount(){
            console.log(`组件${Com.name}被创建了,时间:${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`组件${Com.name}被销毁了,时间:${Date.now()}`)
        }
        render(){
            //正常的属性
            // 已经abc,代表要转发的ref, abc打印出来其实就是{current:null}
            let {abc , ...rest} = this.props
            return <>
                <Com {...this.props} ref={abc}/>
            </>
        }
    }
    return React.forwardRef((props,ref) => {
        return <LogWrapper abc={ref} {...props}/>
    })
}

