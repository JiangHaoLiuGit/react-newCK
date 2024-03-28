# 类组件
class组件 
必须class Name extends React.Component{
    render(){
        return <div></div>
    }    
}
必须里面写render函数用于渲染组件

# 函数组件
export default function Name(){
    return <div></div>
}

# 组件接受的属性props
函数组件:参数props接受传递的参数
类组件:  可以在constuc接受