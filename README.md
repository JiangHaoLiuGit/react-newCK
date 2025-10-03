# LayoutEffect - hook
执行时机不同
Effect:浏览器渲染完成之后触发,这里再次修改dom可能会修改两次从而出现页面闪烁和页面重绘,
LayoutEffect:可以说他是在浏览器绘制之前就已经执行过的,所以不会出现二次修改引起的重绘和闪烁现象
或者可以说已经完成了DOM改动,但还没有完成渲染,有点类似于组件中的componentDidMount还有componentDidUpdate,都是完成之后浏览器才渲染真实DOM的,

React副作用:
1.接口请求
2.手动操作dom
3.设置定时器

React 渲染过程
1.状态变化
2.重新计算虚拟dom
3.diff比对阶段
4.浏览器渲染真实dom
5.effect执行

如果加上layotEffect的话
React 渲染过程
1.状态变化
2.重新计算虚拟dom
3.diff比对阶段
4.layoutEffect执行
5.浏览器渲染真实dom
6.effect执行
综上所述:effect不会阻塞浏览器绘制dom,所以推荐在effect上写副作用
而layouteffect不推荐写副作用,因为如果有耗时任务的话会阻塞浏览器的渲染
比如写一个
for(let i = 0 ; i < 10000; i++){
    ....
}
或者fetch("www.baidu.com").then()去请求接口
这里会影响用户体验
所以如果遇到闪屏现象/或者局部跳动时,因为渲染dom渲染了一次,effect又渲染了第二次会闪屏,
可以用layoutEffect解决
总得来说effect 性能最优,不阻塞浏览器渲染页面,所以副作用通常在他这里写没问题,用户体验最佳

存在的意义

和useEffect语法一样,生命周期也一样,在正式的DOM渲染到root之后才会执行的方法
某些情况下可以用LayoutEffect代替Effect
什么情况下呢,函数内操作真实DOM的时候如果用Effect的话会出现闪烁和重绘的情况,用户体验不好,所以React不得不开发
平替hook => LayoutEffect
