## react渲染原理

新节点挂载篇

React元素定义:React Element , 通过React.createElement创建(语法糖:JSX)

例如:<div><h1>标题</h1></div>
也可以是组件
例如:<App />

那么元素是怎么渲染到页面上的,
先会把React元素转化为React节点

React节点:专门用于渲染到UI界面的对象,React会通过React元素,创建React节点
ReactDOM一定是通过React节点来进行渲染的

节点类型:
React DOM节点:创建该节点的React元素类型是一个字符串
React 组件节点:创建该节点的React元素类型是一个函数或是一个类
React 文本节点:有字符串创建
React 空节点:由null,undefined,false,true
React 数组节点:该节点由一个数组创建
真实DOM:通过document.createElement创建的dom元素

React元素渲染到浏览器大概流程
React元素                 =>               React节点            =>                 用户UI界面
ReactDom.createElement()

## 首次渲染(新节点渲染)

1.通过参数的值创建节点
2.根据不同的节点,做不同的事情(注意:目前只能渲染这五种类型,写其他类型会报错,比如{[0,"asdfb",<p>asfddd</p>]}是数组类型可以渲染,但是:{{name:"江浩",age:18}}对象则不行,数组节点可以渲染,对象节点无法构建虚拟DOM树会报错)
    1.文本节点:通过document.createTextNode创建真实的文本节点
    2.空节点:什么都不做
    3.数组节点:遍历数组,将数组每一项递归创建节点(回到第一步进行反复操作,直到遍历结束)
    4.DOM节点:通过document.createElement创建真实DOM对象,然后立即设置该真实DOM元素的各种属性,然后遍历对应React元素的children属性,递归操作(回到第一步进行反复操作知道遍历完成)
    5.组件节点:
        1.函数组件:调用函数(该函数必须返回一个可以生成节点的内容),将该函数的返回结果递归生成节点,直到遍历结束
        2.类组件
            1.通过new 得到实例对象(new的过程就是会马上执行一遍constructor)
            2.调用静态方法 static getDerivedStateFromProps()
            3.render()
            4.将该组件的componentDidMount生命周期函数加入到执行队列中,当整个虚拟DOM树全部构建完毕,并且将真实的DOM对象加入到容器中后,执行该队列
3.生产虚拟DOM树之后,将该树保存起来,以便后续使用
4.将之前生成的真实DOM对象(app),(将app)加入到容器中

彩蛋:看控制台的输入,想想为什么是1 2 3 4 5 6 1 2 3 4 5 6 b a b a!!!
```js
// 普通节点类型
const root = ReactDOM.createRoot(document.getElementById("root"))
const app = <div>
    <h1>标题{["abc",null,<p>段落</p>]}</h1>
    <p>{undefined}</p>
</div>
root.render(app)
```

以上代码生成的虚拟DOM树
![Alt text](image-1.png)

```js

function App(props){
    return <div>
        <Com n={5}/>
    </div>
}
function Com(props){
    return <h1>
        Com {props.n}
    </h1>
}
// 函数组件类型
const root = ReactDOM.createRoot(document.getElementById("root"))
const app = <App/>
root.render(app)
```

以上代码生成的虚拟DOM树
![Alt text](image-3.png)

```js
class App extends React.Component{
    render(){
        return <div>
            <Com />
        </div>
    }
}
class Com extends React.Component{
    render(){
        return <div>
            <h1>Com</h1>
        </div>
    }
}
// 类组件类型
const root = ReactDOM.createRoot(document.getElementById("root"))
const app = <App/>
root.render(app)
```

以上代码生成的虚拟DOM树
![Alt text](image-2.png)






