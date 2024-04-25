import React, { Component } from 'react'
import './index.css'
export default class SwiperArrow extends Component {
    constructor(props){
        super(props)
    }
    onChangeLeft = () => {
        let num = this.props.index - 1
        if(this.props.index == 0){
            num = this.props.imgList.length - 1
        }
        this.props.onChange && this.props.onChange(num)
    }
    onChangeRight = () => {
        let num = this.props.index + 1
        if(this.props.index == this.props.imgList.length - 1){
            num = 0
        }
        this.props.onChange && this.props.onChange(num)
    }
  render() {
    return (
      <div className='swiperArrow'>
        <span className='left' onClick={this.onChangeLeft}>&lt;</span>
        <span className='right' onClick={this.onChangeRight}>&gt;</span>
      </div>
    )
  }
}
