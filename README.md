# React 服务端渲染 ssr ssg

- 服务端渲染 ssr 
依靠next.js(后端框架)运行的

![Alt text](image-2.png)
在next.js中方法getServerSideProps方法可以用作服务端渲染函数
在react class组件中
{
    render(){
        return <>
    }
    getServerSideProps(){
        //服务端渲染的next.js 语法代码
        //fetch("1.json")
        获取json文件代码
        forEach(){}得到想要的业务代码
    }
}
![Alt text](image-3.png)
在react中写getSeverSideProps方法的时候函数体是在服务端severSide运行的,返回请求的对象
然后注入到组件中的props属性中就可以实现服务端渲染

ssg 就是把一些服务端代码打包到cdn链接中引入cdn就能得到渲染的服务端渲染的代码



## react 源码小结

## 1.研究源码的话首先要调试源码

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

## 2.React元素怎么被创建的?
首先要研究的就是jsx怎么转化成React元素的?
在react中用的是jsx语法描述dom结构的,执行react项目的过程中jsx语法会被babel转化成调用createElement方法
createElement()做了四件事
1.把props属性从config参数中分离出来
2.把子元素挂在到props.children中
3.为props属性赋值默认值(defaultProps)
4.return ReactElement 返回这个函数



调用这个函数会return ReactElement()这个方法会返回React元素 其实就是返回一个js对象,也就是用来描述真实dom

## 3.React架构
react 16. 引入fiber架构
![Alt text](%E5%B1%80%E9%83%A8%E6%88%AA%E5%8F%96_20250518_202926.png)
在React15版本中采用了循环递归virtualDOM(虚拟DOM)的比对,由于递归用的是js自身的执行栈,一旦开始就无法停止,知道执行完成,如果virtualDOM层级非常深的话就会长期占用js主线程,由于js是单线程无法同时执行其他任务,浏览器UI线程和JS线程是互斥的,所以这时候会造成无法响应用户操作,无法及时执行元素动画(在执行js递归对比虚拟dom),造成页面卡顿
所以,react团队引入了fiber采用双缓存策略以及改变react架构完美解决了这个问题

React 16. 设计架构
1.Scheduler(调度层):调度任务的优先级,高优先级任务优先进入协调器

在react16中放弃了循环递归virtualDOM,而是采用循环模拟递归,而且比对过程是利用浏览器空余时间完成的,不会长期占用主线程,这就解决了virtualDOM比对造成页面卡顿的问题.
总体:他要保证任务调度,负责React代码在浏览器空闲时间执行

2.Reconciler(协调层):构建Fiber数据结构,比对Fiber对象找出差异,记录Fiber对象要进行的DOM操作
负责构建Fiber节点,找出Fiber节点差异,并标记差异

3.Renderer(渲染层):负责将发生变化的部分渲染到页面
根据Fiber节点执行渲染操作

## 4.数据结构
Fiber数据结构
其实就是js对象,从virtualDOM(虚拟DOM)演变而来的,里面的对象属性和虚拟DOM属性也不一样,具体为{
    1.tag:区分这个react元素为普通节点类型或者函数组件或者类组件
    2.type:普通元素就是"div"或者"span",如果是类组件的话就是构造函数,函数组件就是函数体
    还有一些属性是定位属性:
    3.return:它的父元素,
    4.child:它的子元素,
    5.sibling:它的兄弟元素,
    还有一些需要执行的DOM操作
    6.updateQueue:[],他是任务队列,里面放的是组件应该要执行的操作,比如,组件状态的更新,或者初始化渲染函数
    在举例细一点,比如react中有多个this.setState(),那么先会把多个任务都放到这里,然后最后一起执行,所以react中会有
    state = {
        name:"老婆",
        age:"16",
    }
    this.setState({name:"江浩"})
    console.log(this.state.name)//老婆
    this.setState({age:"17"})
    上面打印的值其实是旧的,因为这里还没有去改变状态,而是任务都会放到updateQueue任务队列里面,最后一起执行
    7.effectTag:记录fiber要执行的DOM操作,比如,删除,插入,更新
    8.expirationTime:任务的过期时间
}

return <div>
    <h1>name</h1>
    <App />
<div>
比如这个组件会被渲染成三个Fiber数据,以及形成对应的Fiber树结构

帧的概念
![Alt text](image-5.png)

## 4.1:双缓存技术
![Alt text](%E5%B1%80%E9%83%A8%E6%88%AA%E5%8F%96_20250518_213142.png)
在内存中构建,构建完成后将自动替换的技术叫双缓存技术
React使用双缓存技术完成Fiber树的构建与替换,实现DOM对象的快速更新
在React中最多同时存在两课Fiber树,当前在屏幕中显示的内容对应的Fiber树叫做currentFiber树,当发生更新时,React会在内存中重新构建一颗新的Fiber树,这颗正在构建的Fiber树叫做workInProgress树,这棵树就是即将要显示到内存中的Fiber树,当这颗Fiber树构建完成后,React会使用它直接替换currentFiber树达到快速更新DOM的目的.因为workInProgressFiber树是在内存中构建的所以他的构建速度非常快的.
一旦workInProgressFiber树在屏幕中构建完成,它就会替换旧的树变成currentFiber树

区分fiberRoot和rootFiber
![Alt text](image-4.png)
fiberRoot 表示Fiber数据结构对象,是Fiber数据结构外层的对象
rootFiber 表示组件挂载点对应的Fiber对象,就是id为root的div对应的Fiber对象就是rootFiber

fiberRoot包含rootFiber,在rootFiber中current.stateNode:FiberRoot
而fiberRoot只能有一个,而rootFiber可以有多个因为render方法是可以调用多次的,而render调用的时候第二个参数就是rootFiber
fiberRoot会记录应用更新的信息,比如协调层在完成工作后,会将工作成果储存在fiberRoot中

## 5.React初始化

## 5.1 Render阶段 协调层创建FIber对象结构,更新节点比对Fiber对象差异,并做出标记
初始化阶段和更新阶段都在这里进行
    判断container上面有没有创建fiberRootNode和rootFiber,如果有的话就是更新阶段,如果没有的话就是初始化阶段
初次进入肯定是初始化阶段
1.调用render方法去创建new FiberRootNode()对象以及rootFiber()并且相互之间建立关系
2.然后会创建一个任务队列,在任务队列中放初始化渲染页面的任务,再把任务队列添加到浏览器的任务队列里
等浏览器有空闲的时间再去执行!
3.浏览器开始执行放到任务队列里的初始化任务
为FiberRootNode中每个react元素添加Fiber对象形成对应的Fiber树(就是FiberRootNode)
此时构建的Fiber树其实就是workInProgressFiber树以及要构建对应的rootFiber
然后循环模拟递归创建Fiber对象
递阶段:beginWork,从父到子
归阶段:completeUnitOfWork,从子到父
创建出来的Fiber节点是一个链表类型的节点,child(子节点),siblin(下一个兄弟节点),reutrn(父节点)


进入初始化阶段后创建FiberRootNode和RootFiber,并且两者建立联系FiberRootNode中current属性对应的就是rootFiber,在rootFiber中的stateNode属性对应的就是FiberRootNode


## 5.2 Commit阶段,获取render的成果(workInProgressFiber树),然后执行相应的DOM操作,执行组件的钩子函数
## 5.2.1 Commit阶段一(commit前做的工作,)
执行钩子函数getSnaqBeforeUpdate
## 5.2.2 Commit阶段二(commit应该做的主体工作)
去执行DOM操作
## 5.2.3 Commit阶段三(commit后应该做的工作)
去执行类组件生命周期函数:componentDidMount()
去执行函数组件钩子函数

研究源码想要看到的东西
探究react从jsx中的代码到渲染页面经历的阶段
jsx => React元素 => Fiber对象 + DOM对象(workInProgressFiber树) => 渲染层 => 执行对象的DOM操作(新增插入 / 更新数据 / 删除)形成最新的currentFiber树

1.jsx => React元素 
babel会把jsx中的标签调用createElement方法创建一个React元素(js对象)
2.React元素 => Fiber对象 + DOM对象
调用render方法(协调层负责的阶段),创建FiberRoot和RootFiber,形成currentFiber树
copy currentFiber树形成workInProgressFiber树
在上面会为每个React元素构建相应的Fiber对象和DOM对象,同时增加属性记录对应的DOM操作,应该新增插入/更新数据/删除DOM操作(协调层应该做的事情)
3.workInProgressFiber树 => 渲染层 执行对象的DOM操作()替换


diff算法篇:
就是在render的阶段
render分为初始化渲染和更新阶段
diff算法只发生在更新阶段
React更新阶段是协调层reconclier负责的,Diff算法全程是reconcile,所以在React中涉及到diff算法的函数都是以reconile开头的
在diff中比较的是两中状态(新旧)之间的差异这里的旧状态是指现在页面中的CurrentFiber数中的Fiber节点
新的状态是指JSX对象,这里的JSX对象是指如果是class组件则是render中return的返回部分,如果是函数组件的话就是函数return返回的部分
diff算法将会比较他俩之间的差异,并创建最新的Fiber数据结构,将这个工作成功放到内存汇总WorkInProgressFiber树中,然后commit阶段获取到最新的DOM,然后将他渲染到页面中

简述一下diff算法就是比对当前的CurrentFiber树以及JSX对象,生成最新的Fiber树的过程就是Diff算法的工作流程
具体的工作流程分为两大类
单个Fiber对象的diff

1.首先会比对他的层级,如果层级发生变化则会删除整个节点以及节点child,然后会重新创建对应的fiber节点
2.会比对前后的元素type,比如之前是li现在是div的话也会删除整个节点以及child
3,比对key和type,不一样也是同理,会删除整个,然后重新创建

多个Fiber对象的diff
他会遍历两次
第一次会遍历每个元素是否有需要更新
第二次会遍历数组长度是否变化或者某个节点位置是否发生变化
