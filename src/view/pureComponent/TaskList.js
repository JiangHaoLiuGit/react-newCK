import React, { PureComponent } from 'react'
import Task from './Task'
export default class TaskList extends PureComponent{
  render() {
    console.log("TaskList render")
    let skuLi = this.props.sku.map(it => <Task key={it.name} name={it.name} isFinite={it.isFinite}/>)
    return (
      <ul>
        {skuLi}
      </ul>
    )
  }
}
