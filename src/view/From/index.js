import React, { Component } from 'react'
import Check from '../../component/CheckboxGroup/index.js'
import Radio from '../../component/RadioGroup/index.js'
import Select from '../../component/SelectGroup/index.js'
export default class Test extends Component {
  state = {
      dates : [
          {value:"football",text:"足球"},
          {value:"basketball",text:"篮球"},
          {value:"movie",text:"电影"},
          {value:"other",text:"其他"}
      ],
      chooseDates:["football"],
      sexDates: [
        {value:"man",text:"男人"},
        {value:"girl",text:"女人"},
        {value:"renyao",text:"人妖"},
      ],
      sex:"",
      cityList:[
        {value:"beijing",text:"北京"},
        {value:"shanghai",text:"上海"},
        {value:"hangzhou",text:"杭州"},
      ],
      city:"",

  }
  onChange=(newArr,name,e) =>{
      this.setState({
          [name]:newArr
      })
  }
  componentDidMount (){
      
  }
  render() {
    return (
      <div>
        <p>
          爱好: 
          <Check name="chooseDates" dates={this.state.dates} chooseDates={this.state.chooseDates} onChange={this.onChange}/>
        </p>
        <p>
          性别:
          <Radio name='sex' dates={this.state.sexDates} sex={this.state.sex} onChange={this.onChange}/>
        </p>
        <p>
          城市:
          <Select name='city' dates={this.state.cityList} city={this.state.city} onChange={this.onChange}/>
        </p>
        <div>
            <p><button onClick={()=>{console.log(this.state)}}>点击获取</button></p>
        </div>
      </div>
    )
  }
}
