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
            console.log(this.props)
            let {abc , ...rest} = this.props
            return <>
            {/* 4.0把abc传给Com组件 */}
            {/* 后续在component/TestAandB */}
                <Com {...this.props} ref={abc}/>
            </>
        }
    }
    // 3.0 refA被当做第二个参数ref传给abc
    return React.forwardRef((props,ref) => {
        return <LogWrapper abc={ref} {...props}/>
    })
}

