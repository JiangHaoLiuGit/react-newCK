import React, { Component } from 'react'
import './index.css'
export default class SwiperDot extends Component {
  render() {
    let spans = this.props.imgList.map((it,index) => 
        <span 
        className={index == this.props.index ? 'span active':'span'} 
        onClick={()=>{
            this.props.onChange && this.props.onChange(index)
        }}
        ></span>
    )
    return (
      <div className='swiperDot'>
        {spans}
      </div>
    )
  }
}
