import React,{Component} from 'react'
import types from '../../utils/componentTypes'
import propTypes from 'prop-types'
import withDataGroup from '../hoc/withDateList'
class CheckBox extends Component{
    // 默认属性值类型
    static propTypes = {
        name :propTypes.string.isRequired,
        onChange:propTypes.func,
        chooseDates:types.chooseDatas,
        info:types.singleDate.isRequired
    }
    onChange=(e)=>{
        let newArr
        if(e.target.checked){
            newArr = [...this.props.chooseDates,e.target.value]
        }else{
            newArr = this.props.chooseDates.filter(it => it!=e.target.value)
        }
        console.log("newArr")
        console.log(newArr)
        this.props.onChange && this.props.onChange(newArr, this.props.name , e)
    }
    render(){
        return (
            <label>
                <input type="checkbox"
                name={this.props.name}
                value={this.props.info.value} 
                checked={this.props.chooseDates.includes(this.props.info.value)}
                onChange={this.onChange}
                />{this.props.info.text}
            </label>
        )
    }
}

export default withDataGroup(CheckBox)