import React from 'react'
import types from '../../utils/componentTypes.js'
import propTypes from 'prop-types'
import withDataGroup from '../hoc/withDateList.js'
class Option extends React.Component{
    static propTypes = {
        info:types.singleDate
    }
    render(){
        return <>
            <option value={this.props.info.value}>{this.props.info.text}</option>
        </>
    }
}
const Options = withDataGroup(Option)
class Select extends React.Component{
    static propTypes = {
        dates:types.groupDates.isRequired,
        onChange:propTypes.func,
        city:propTypes.string.isRequired,
        name:propTypes.string.isRequired
    }
    render(){
        return <>
            <select name={this.props.name} value={this.props.city} onChange={(e)=>{
                this.props.onChange && this.props.onChange(e.target.value,this.props.name)
            }}>
                {/* key={this.props.info.value}  */}
                <Options {...this.props}/>
            </select>
        </>
    }
}

export default Select