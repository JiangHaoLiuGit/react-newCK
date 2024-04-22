import React from 'react'

export function WithTest(Com){
    return class LogWrapper extends React.Component{
        componentDidMount(){
            console.log(`组件${Com.name}被创建了,时间:${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`组件${Com.name}被销毁了,时间:${Date.now()}`)
        }
        render(){
            return <>
                <Com {...this.props}/>
            </>
        }
    }
}