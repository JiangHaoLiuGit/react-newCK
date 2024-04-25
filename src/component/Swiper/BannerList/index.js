import React, { Component } from "react";
import propTypes from "prop-types";
import "./index.css";

export default class BannerList extends Component {
  static defaultProps = {
    imgList: [],
  };
  static propTypes = {
    imgWidth: propTypes.number.isRequired,
    imgHeight: propTypes.number.isRequired,
    imgList: propTypes.arrayOf(propTypes.string).isRequired,
    index: propTypes.number.isRequired,
    cycle: propTypes.number.isRequired,
    hao: propTypes.number.isRequired,
  };
  static time = null;
  switchTo(num) {
    if (num > this.props.imgList.length) {
      num = this.props.imgList.length;
    }
    if (num < 0) {
      num = 0;
    }
    console.log(num);
    // 现在的marginLeft
    let startWidth = this.props.index * this.props.imgWidth;

    // 结束时候的marginLeft
    let endWidth = num * this.props.imgWidth;
    console.log(endWidth);
    //当前运动次数下标
    let start = 0;
    // 运动的总次数
    let frequency = Math.ceil(this.props.cycle / this.props.hao);
    // 运动前的初始位置
    let init = Math.abs(parseInt(this.div.style.marginLeft));
    // 每次运动的长度
    let widths = (endWidth - init) / frequency;
    // 避免出现多个计时器先清除
    clearInterval(this.time);
    this.time = setInterval(() => {
      start++;
      if (start == frequency) {
        clearInterval(this.time);
        console.log("num",num)
        this.props.onChangeIndex && this.props.onChangeIndex(num);
      }
      this.div.style.marginLeft = -(init + Math.ceil(start * widths)) + "px";
    }, this.props.hao);
  }
  divRef = (el) => {
    this.div = el;
  };

  render() {
    let imgs = this.props.imgList.map((it, index) => (
      <img
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
        }}
        key={index}
        src={it}
        alt={"img" + index}
      />
    ));
    return (
      <div
        className="BannerList"
        ref={this.divRef}
        style={{
          width: this.props.imgList.length * this.props.imgWidth,
          marginLeft: -(this.props.index * this.props.imgWidth),
        }}
      >
        {imgs}
      </div>
    );
  }
}
