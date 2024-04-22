import React from 'react'
import types from '../../utils/componentTypes'
import propTypes from 'prop-types'


export default class Check extends React.Component{
    // 默认属性值
    static defaultProps = {
        dates:[],
        chooseDates:[]
    }

    // 默认类型限制
    static propTypes = {
        dates:types.groupDates.isRequired,
        name:propTypes.string.isRequired,
        chooseDates:propTypes.array.isRequired,
        onChange:propTypes.func
    }
    onChange=(e)=>{
        let newArr
        if(e.target.checked){
            newArr = [...this.props.chooseDates,e.target.value]
        }else{
            newArr = this.props.chooseDates.filter(it => it!=e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr , this.props.name , e)
    }
    getChooseDates(){
        return this.props.dates.map(it => (
            <label key={it.value}>
                <input type="checkbox"
                name={this.props.name}
                value={it.value} 
                checked={this.props.chooseDates.includes(it.value)}
                onChange={this.onChange}
                />{it.text}
            </label>
        ))
    }
    render(){
        let com = this.getChooseDates()
        return <>
            {com}
        </>
    }
}