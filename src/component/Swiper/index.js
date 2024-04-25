import React, { Component } from 'react'
import './index.css'
import img1 from './img/img1.avif'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import BannerList from './BannerList'
import SwiperArrow from './SwiperArrow'
import SwiperDot from './SwiperDot'

// width: 590px;
// height: 470px;
export default class Swiper extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      widths:708,
      heights:564,
      index:0,
      cycle:500,
      hao:16
    }
  }
  imgContainerRef = el => {
    this.imgContainer = el
  }
  onChangeIndex = index => {
    console.log("index",index)
    this.setState({
      index:index
    })
  }
  handleOnChange = num => {
    this.imgContainer.switchTo(num)
  }
  render() {
    return (
      <div className='swiperBox' style={{
        width:this.state.widths,
        height:this.state.heights
      }}>
        {/* 图片区域 */}
        <BannerList
         imgWidth={this.state.widths}
         imgHeight={this.state.heights}
         index={this.state.index}
         cycle={this.state.cycle}
         hao={this.state.hao}
         onChangeIndex={this.onChangeIndex}
         imgList={[img1,img2,img3,img4,img5,img6]}
          ref={this.imgContainerRef}
        />

        {/* 箭头区域 */}
        <SwiperArrow
         index={this.state.index} 
         onChange={this.handleOnChange}
         imgList={[img1,img2,img3,img4,img5,img6]}
         />

          {/* 小点区域 */}
          <SwiperDot 
          imgList={[img1,img2,img3,img4,img5,img6]} 
          onChange={this.handleOnChange}
          index={this.state.index}/>
      </div>
    )
  }
}
