import React from 'react'
import PropTypes from 'prop-types'

export class A{

}

export class B extends A{

}

export default class ValidationComp extends React.Component{
    // 默认属性
    // 先混合属性赋予默认值
    static defaultProps = {
        isNan:false
    }

    // 然后再判断参数的类型是否符合预期
    // 这里是重点,这里标识这个组件中需要传的参数和参数类型,别的人用你的组件一般都会看这里!!!,所以注释也要写好
    static propTypes = {
        name:PropTypes.string.isRequired,//name属性必须是一个字符串,并且必填
        isNan:PropTypes.bool.isRequired,//isNan属性必须是一个布尔类型,必填
        age:PropTypes.number,//age属性必须是一个数字,非必填
        onClick:PropTypes.func,//onClick必须是一个函数,非必填
        c:PropTypes.any,//c可以是任何值
        d:PropTypes.node,//d非必填,而且必须是一个可以渲染的内容,字符串,数字,React元素,但是如果传undefined或者null的话会认为你没有传
        e:PropTypes.element,//e必须是一个react元素
        F:PropTypes.elementType,//F必须是一个react类型
        g:PropTypes.instanceOf(A),//要看props.g的原型链的有没有A!
        sex:PropTypes.oneOf(["男","女","人妖"]),//必须是数组里的成员,
        arrOf:PropTypes.oneOfType([PropTypes.number,PropTypes.string]), //arrOf类型要不是数字,要不是数组.
        h:PropTypes.arrayOf(PropTypes.number),//数组的每个成员必须是数字类型
        // i:PropTypes.ObjectOf(PropTypes.string),//对象成员的key值必须是字符串.有点鸡肋,没啥用
        j:PropTypes.shape({
            city:PropTypes.number.isRequired,
            first:PropTypes.string.isRequired
        }).isRequired,//这个经常用,限制传对象的类型必须满足这个格式
        score:function(props,propsName,componentName){//限制0-100数字
            console.log(props)
            // console.log(propsName)
            // console.log(componentName)
            let val = props[propsName]
            // 验证必填
            if(val === null || val == undefined){
                return new Error(`invalid prop ${propsName} in ${componentName} , ${propsName} is Required`);
            }

            // 验证是不是数字
            if(typeof val !== 'number'){
                return new Error(`invalid prop ${propsName} in ${componentName} , ${propsName} is Number`);
            }

            // 验证范围0-100
            if(val < 0 || val > 100){
                return new Error(`invalid prop ${propsName} in ${componentName} , ${propsName} must is between 0 in 100`);
            }
            
        }
    }
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            isNan:this.props.isNan,
            age:this.props.age,
            sex:this.props.sex,
            j:this.props.j,
            arrOf:this.props.arrOf,
            score:this.props.score
        }
    }
    
    render(){
        let F = this.props.F
        let com = this.state.isNan?<span>有啊</span>:<span>无啊</span>
        return <>
            <div>name:{this.state.name}</div>
            <div>isNan:{com}</div>
            <div>age:{this.state.age}</div>
            <div>
                F:  <F/>
            </div>
            {/* <div>
                g: {this.state.g}
            </div> */}
            <div>
                sex:{this.state.sex}
            </div>
            <div>
                j:{this.state.j.city},{this.state.j.first}
            </div>
            <div>
                arrOf:{this.state.arrOf}
            </div>
            <div>
                score:{this.state.score}
            </div>
            
        </>
    }
}