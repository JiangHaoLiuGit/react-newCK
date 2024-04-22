## 高阶组件HOC练习

js中高阶函数HOF(Higher-Order Function)
参数是函数,返回的也是一个函数
function fun(func){
    return function(){
        func()
    }
}
应用场景:函数科里化/防抖节流

react中的高阶组件HOC(higher-Order Component)
组件props接受一个组件,并且返回的也是一个组件!!!



js中的语法糖
举个例子:es5中有构造函数,都知道哈
然后es6中出来class
其实就是构造函数的另一个高大上写法嘛,其实class就是一个语法糖.构造函数的另一种写法而已


React元素有两种
1.<h1></h1> React Html Element (html元素组件)

2. class Com{
    return <h1>XXX</h1>
}
<Com></Com> React Component Element (react组件元素)

通常,可以利用HOC实现横切关注点

>举例:20个组件,每个组件在创建组件和销毁组件的时候,需要操作日志记录
>20个组件,他们需要显示一些内容,得到的数据结构完全一致

注意:
1.不要再render中使用高阶组件
2.不要在高阶组件内部更改传入的组件