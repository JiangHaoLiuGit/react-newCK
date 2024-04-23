import React from 'react'
import types from '../../utils/componentTypes.js'
import propTypes from 'prop-types'
import withDataGroup from '../hoc/withDateList.js'

class RadioGroup extends React.Component{
    // 默认类型限制
    static propTypes = {
        dates:types.groupDates.isRequired,
        name:propTypes.string.isRequired,
        sex:propTypes.string,
        onChange:propTypes.func.isRequired
    }
    onChange = (e) => {
        if(e.target.checked){
            this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
        }
    }
    render(){
        return <>
            <label>
                <input type="radio"
                 name={this.props.name}
                 value={this.props.info.value}
                 checked={this.props.sex==this.props.info.value}
                 onChange={this.onChange} />{this.props.info.text}
            </label>
        </>
    }
}
export default withDataGroup(RadioGroup)