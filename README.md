# React 路由信息



Router组件会创建一个上下文,并且,向上下文中注入一些信息

该上下文对开发者是隐藏的,Route组件若是匹配到了该地址,则会将这些上下文中的信息作为属性传入对应的组件

## history

他并不是window.history对象,我们利用该对象无刷新跳转地址

**为什么没有直接使用window.history对象**

1.React-Router有两种模式:Hash\History.如果直接使用window.history,只能支持一种模式,而在React中
import {BrowserRouter as Router} from 'react-router-dom' -----history模式
import {HashRouter as Router} from 'react-router-dom' --------hash模式
两种路由模式:
history模式:BrowserRouter as Router indexHistory.js
hash模式:HashRouter as Router indexHash.js

2.当使用window.history.pushState方法时,没有办法收到任何通知,将导致React无法知晓地址发生了变化,结果导致无法重新渲染组件

- push():将某个新的地址入栈(历史记录栈)



相对路径和绝对路径

绝对路径就是
https://baidu.com
相对路径(有个参照物)
比如http://location:3000
加相对路径/a
就是http://location:3000/a


