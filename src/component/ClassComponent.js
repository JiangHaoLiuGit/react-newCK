import React from 'react'

export default class ClassComponent extends React.Component{
    static defaultProps = {
        n1:1,
        n2:2,
        n3:3,
    }
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <div>n1:{this.props.n1}</div>
                <div>n2:{this.props.n2}</div>
                <div>n3:{this.props.n3}</div>
            </>
        )
    }
}