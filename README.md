## React练习
生命周期
只有类组件有生命周期,函数组件没有

## 旧版生命周期 
React < 16.0

一.组件挂载阶段

第一步:会执行constructor()
1.同一个组件对象只会被创建一次
2.不能在第一次没有挂载之前,调用setState,为了避免出现问题,构造函数constructor中严禁使用setState()

第二步:componentWillMount()
1.即将挂载的时候,会执行
2.大多数情况只会执行一次

第三步:**render()**
1.返回一个虚拟DOM,会被挂载到虚拟DOM树中,最终通过ReactDOM将虚拟DOM渲染成真实DOM更新到最新页面
2.render可能运行一次,只要重新渲染,就会重新render
3.严禁使用setState()触发死循环

第四步:**componentDidMount()**
1.标志着页面挂载完成,钩子只会执行一次 
2,可以使用setState,
3,通常情况下,ajax,计时器,网络请求都放到这里

页面挂载完成从这里件进入活跃状态

二.组件进入更新阶段
状态和属性变化是会走这里

第五步:componentWillReceiveProps
1.参数为接受的是即将更新的属性值
2.也能打印旧的属性值
3.该函数可能会导致一些bug,所以不推荐使用,新版生命周期直接移除了

第六步:**shouldComponentUpdate**(属性最新值,状态最新值)
1.根据返回值return false 或者 return true来表示React是否要重新渲染该组件render
2.默认情况下,会直接返回true

第七步:componentWillUpdate(属性新值,状态新值)
1.组件即将被重新渲染

第八步:componentDidUpdate(属性旧值,状态旧值)
1.组件已经被渲染
2.在这里可以做一些dom操作,改变元素

三.组件销毁阶段

第九步:**componentWillUnmount**
1.组件已经被销毁
2.销毁一些组件依赖的资源,比如计时器,

## 新版生命周期 
React >= 16.0

一.挂载阶段

第一步
constructor()

第二步
static getDerivedStateFromProps(props,state)静态方法,可以打印最新props和state
不能进行实际this改变操作只能访问

第三步
render()

第四步
componentDidMount()
和旧版一样,可以写ajax,定时器,this.setState({})

组件挂载阶段完成

组件更新阶段开始

第一步:静态函数
static getDerivedStateFromProps(props,state)
能打印最新的props和state但不能赋值无法获取this,防止你瞎赋值违规操作

第二步:shouldComponentUpdate(props,state)
获取最新props和state,返回true或者false来控制是否render,性能优化点!

第三步:render()

第四步:getSnapshotBeforeUpdate
真实的DOM构建完成,但还未渲染到实际页面当中.
在该函数中可以在这里进行dom操作,实现附加的dom操作
该函数的返回值回作为下一个生命周期函数的第三个参数componentDidUpdate的第三个参数
所以注意:这里是最后修改数据的入口,如果在下一个生命周期里修改数据的话页面会重新渲染,渲染会开始渲染第二次!!!

第五步:componentDidUpdate()
这里真实Dom已经挂载到了页面中

