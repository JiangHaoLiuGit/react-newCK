import React from 'react'
import types from '../../utils/componentTypes.js'
import propTypes from 'prop-types'

export default class Radio extends React.Component{
    // 默认属性值
    static defaultProps = {
        dates:[],
        city:'',
    }

    // 默认类型限制
    static propTypes = {
        dates:types.groupDates.isRequired,
        name:propTypes.string.isRequired,
        city:propTypes.string.isRequired,
        onChange:propTypes.func.isRequired
    }
    onChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
    }
    render(){
        let com = this.props.dates.map(it => (
                <option value={it.value} key={it.value}>{it.text}</option>
        ))
        return <>
            <select name={this.props.name} value={this.props.city} onChange={this.onChange}>
                {com}
            </select>
        </>
    }
}