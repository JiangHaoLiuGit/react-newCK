# React 路由信息



Router组件会创建一个上下文,并且,向上下文中注入一些信息

该上下文对开发者是隐藏的,Route组件若是匹配到了该地址,则会将这些上下文中的信息作为属性传入对应的组件

## history(跳转)

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
第一个参数:跳转的相对路径
第二个参数:添加的状态数据(可以从属性中的location中访问到)

- replace():将某个新的地址替换(或者理解成剪切)成当前地址
参数一样

- go:用法一样
- forward:用法一样
- back:用法一样

## location(地址信息)

和history.location 一致 双方 === 为true
里面记录的是hash值
pathname即相对路径名称

location对象中记录了当前地址的相关信息

我们通常使用第三方库区解析 query-string

## match

该对象中保存的是路由匹配的相关信息

- isExact:事实上,当前路径和路由配置的路径是否是精确匹配的
和<Route path="/sub" exact>组件中的exact属性没有关系,和当前路径的pathname == Route.pah 有关,如果true那isExact就是true
- params:获取路径规则中对应的数据

实际上,在书写Route组件的时候path属性时,可以书写一个`` string pattern ``(字符串正则)

react-router使用了第三方库:Path-to-RegExp //解决了路径中可以填正则的功能,如果匹配不到的话Route组件就不会被匹配
所以在安装react-router-dom的时候安装了依赖库react-router
安装react-router的时候又安装了他的依赖库 Path-to-RegExp(丰富reactRouter功能的插件)

**向某个页面传递数据的方式**

1. 使用state:在history.push/replace/go/back/forward()时传递的第二个参数,可以在跳转的页面中props.location.state获取
2. **利用search:把数据填写到地址栏的?后面**
3. 利用hash:把数据填写到hash后面location:3000/a?a=1&b=2#c=3&d=4,然后用queryString.parse解析
4. **params(地址参数):把数据填写到路径中**

- params

要把 
1.history 
2.location
3.match
三者都是干嘛的,有什么用,都在组件的属性中,可以通过props.获取

1.history 跳转路由的
2.location 记录路由信息参数
3.match 设置页面传参规则以及参数可以对应正则

## 非路由组件获取路由信息

某些组件,并没有直接放入Route中,因此他不能通过props.history.push()跳转页面,如果这些组件想获取路由信息,
可以使用下面两种方式:
1.将路由信息从父组件一层层传递到子组件 <A {...props}/>
2.使用react-router中的高阶组件withRouter包装一下A组件,那么A组件中props中也能拿到路由对象参数

相对路径和绝对路径(面试有时会考)

绝对路径就是
https://baidu.com
相对路径(有个参照物)
比如http://location:3000
加相对路径/a
就是http://location:3000/a


同事告诉你项目中要用query-string插件解析地址中的search参数,你没用过,你怎么去查怎么用
npm中的插件教程去哪里找?
去npmjs.com搜query-string怎么用
会发现
import queryString from 'query-string'
queryString.parse(props.location.search)就行了


