import React from 'react'
import types from '../../utils/componentTypes.js'
import propTypes from 'prop-types'

export default class Radio extends React.Component{
    // 默认属性值
    static defaultProps = {
        dates:[],
        sex:'',
    }

    // 默认类型限制
    static propTypes = {
        dates:types.groupDates.isRequired,
        name:propTypes.string.isRequired,
        sex:propTypes.string.isRequired,
        onChange:propTypes.func.isRequired
    }
    onChange = (e) => {
        if(e.target.checked){
            this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
        }
    }
    render(){
        let com = this.props.dates.map(it => (
            <label key={it.value}>
                <input type="radio"
                 name={this.props.name}
                 value={it.value}
                 checked={this.props.sex==it.value}
                 onChange={this.onChange} />{it.text}
            </label>
        ))
        return <>
            {com}
        </>
    }
}