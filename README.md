## react事件

在react中真实的dom事件和react虚拟dom元素的事件同时存在时,事件触发顺序可能会有些怪异,这节来讲解触发顺序

事件冒泡:元素点击事件是会冒泡的,有极少事件是不冒泡的,比如input框的onFocus

这里的事件是:通过ReactDom创建的虚拟dom中的事件和真实dom的事件(给id为root的dom元素增加事件)同时存在时
的事件发生逻辑

1.给document注册事件
2.几乎所有的元素的事件处理,均在document的事件中处理
3.在document的事件处理,React会根据虚拟Dom树的完成事件函数的调用

**注意事项**

先会运行真实dom的事件,然后向上冒泡,直到冒泡至真实dom顶端即document(浏览器对象)(如果在这里阻止冒泡的话下面的逻辑就不会执行!!!版本<18.0的时候是这样,>18.0的时候是正常逻辑不会阻止后续逻辑运行)
然后在看虚拟dom树,先触发虚拟dom的事件,然后在往上冒泡

1.如果给真实的DOM注册事件,阻止了事件冒泡,则会导致React的相应事件无法触发(这条在18版本中直接失效,无视)
2.如果给真实的DOM注册事件,事件会先于React事件运行
3.通过React的事件中阻止事件冒泡,无法阻止真实的DOM事件(阻止的是虚拟DOM树中的元素冒泡)
4.react中的虚拟dom中的e是合成类型的e,如果想获取原生类型的e的话可以用e.nativeEvent
5.在事件处理程序中,不要异步的使用事件对象,如果一定要使用,需要调用persist函数

考点:root注册了点击事件
document.querySelector("#root").onclick = e => {
    console.log("真实dom元素:root元素点击",e)
    e.stopPropagation()//阻止事件冒泡
}
为啥react事件一个都运行不了?
解析:react为了提高效率react事件都是在document上进行事件委托统一处理的,
看文件树结构
document > html > head + (body > root > react元素)
root事件和react元素事件同时存在时,会先执行root的事件,然后会向上冒泡,直到冒泡到document的时候才会统一
触发react事件,由于root中阻止了冒泡,所以document是等不到执行react事件的,所以react事件会都不触发!!!




