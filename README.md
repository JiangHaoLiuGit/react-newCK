## Ref

reference:引用

场景:希望操作dom元素的方法,比如input,video标签.或者用于调用或者自定义组件的方法

1.ref作用与内置的html组件,得到的将是真实dom对象
2.ref作用于类组件,得到的将是组件实例
3.ref不能作用与函数组件(函数组件内部是可以用的)

ref不再推荐用字符串去赋值,字符串赋值的方式将来会被移除

目前,ref推荐使用对象或者是函数

**对象**

通过React.createRef()创建

**函数**
函数调用
1.componentDidMount的时候会调用改函数
    1.componentDidMount事件中可以使用ref
2.如果ref的值发生变动(旧的函数被新的函数替代),分别调用旧的函数以及新的函数,时间点出现在componentDidUpdate之前
    1.旧的函数被调用是,显示null
    2.新的函数被调用,传递对象
3.如果ref所在的组件被卸载,会调用函数

**谨慎使用Ref**

能够使用属性和状态进行控制,就不要使用ref