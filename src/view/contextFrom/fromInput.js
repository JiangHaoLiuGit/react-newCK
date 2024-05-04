import React from 'react'
import PropTypes from 'prop-types'
import ctx from './fromContext'

export default class Input extends React.Component{
    static contextType = ctx
    static propTypes = {
        type:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired
    }
    static defaultProps = {
        type:"text"
    }
    render(){
        return<>
            <input 
            type={this.props.type} 
            value={this.context.formData[this.props.name] || ''} 
            onChange={(e)=>{
                this.context.changeInput(this.props.name,e.target.value)
            }}
            />
        </>
    }
}