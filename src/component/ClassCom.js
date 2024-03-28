import React from 'react'

export default class ClassComp extends React.Component{
    
    constructor(props){
        super(props)
        
    }
    render (){
        if(this.props.age){
            return <h1>类组件 我的年龄:{this.props.age}</h1>
        }else{
            return <>
                <h1>类组件 我叫{this.props.obj.name}</h1>
                <span>年龄:{this.props.obj.age}</span>
            </>
        }
        
    }
}