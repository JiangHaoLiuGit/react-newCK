import React, { PureComponent } from 'react'

export default class TaskAdd extends PureComponent {
    state ={
        name:""
    }
  render() {
    console.log("TaskAdd render")
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(e) => {
            this.setState({
                name:e.target.value
            })
            this.props.hanlderChangeName && this.props.hanlderChangeName(e.target.value)
        }} />
        <button onClick={()=>{
            if(this.state.name != ''){
              this.props.hanlderChangeList && this.props.hanlderChangeList({
                  name:this.state.name,
                  isFinite:false
              })
              this.setState({
                  name:""
              })
            }
        }}>新增</button>
      </div>
    )
  }
}
