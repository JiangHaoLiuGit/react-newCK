**表单**

受控组件和非受控组件

受控组件:组件的使用者,有能力完全控制该组件的行为和内容.通常情况下,受控组件往往没有自身状态,其内容完全受到属性的控制
比如<input type="text" value="123"/>
这个input默认值是123,而且不能改变,这个就是典型的受控组件(受到固定非状态值的默认值的限制)

非受控组件:组件的使用者,没有能力控制该组件的行为和内容,组件的行为和内容全完自行控制

**表单组件默认情况下是非受控组件状态**

jsx 语法js返回元素格式加()不加就出不来

js中数组arr删除成员str,可以用splice,这个是切割数组的,会改变原数组
一般用的是filter多一点
arr.filter(item => item!=str)

arr添加成员str
arr.push(str) 
arr.unshift(str)
[...arr,str]

input 操作中onChange事件
onChange(e)=>{
    e.target获取到input的全部内容
    e.target.value input的value值
    e.target
}