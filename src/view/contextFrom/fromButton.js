import React from 'react'
import PropTypes from 'prop-types'
import ctx from './fromContext'
export default class fromButton extends React.Component{
    static contextType = ctx
    static propTypes = {
        onSubmit:PropTypes.func
    }

    static defaultProps = {
        onSubmit:(data)=>{
            console.log("我是猪",data)
        }
    }
    render(){
        return <>
            <button onClick={()=>{
                this.props.onSubmit && this.props.onSubmit(this.context.formData)
            }}>
                {this.props.children}
            </button>
        </>
    }
}