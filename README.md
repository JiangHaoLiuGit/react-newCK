## PureComponent

纯函数,用于避免不必要的渲染(运行render函数),从而提高效率

优化:如果一个组件的属性和状态没有发生变化的话,重新渲染该组件是没有必要的

PureComponent是一个组件,如果某个组件继承(class xxx extends的时候),xxx的生命周期shouldComponentUpdate会隐式进行优化,对属性和状态进行新旧浅层比较,如果没有变的话则不会重新渲染render

**注意**

1.PureComponent进行的是浅层比较
    1.为了效率,应该尽量使用PureComponent
    2.要求不要改动之前的状态,永远是创建新的状态覆盖之前的状态(Immutable,不可变对象)
    3.有一个第三方JS库,Immutable.js,他专门用于制作不可变对象
2.函数组件,用React.memo函数制作纯组件





