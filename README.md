## Context上下文

创建上下文的只能是类组件比如实例中的Test组件

获取组件的上下文的时候:
前提条件:必须声明一个静态属性 static contextTypes = {}
类组件(ChildB):constructor(props,context)通过第二个参数获取

函数组件(ChildA):可以通过function (props,context)第二个参数获取,十分好用

修改context数据
在父组件定义方法,同时在生命周期getChildContext中定义方法传给子组件,修改数据后会触发getChildContext方法更新上下文数据(自己的和子类组件的数据都会更新)

子组件接受,同时触发父组件的方法可以实现修改上下文数据(修改数据后会触发父组件的getChildContext)

## 新版API ##
由于旧版Context存在效率问题,而已容易导致滥用,所以在新版中修复掉了

**创建上下文**

上下文是一个独立与组件的对象,该对象通过React.createContext(默认值)创建

返回的是一个包含两个属性的对象

1.Provider属性:生产者.一个组件,该组件会创建一个上下文,该组件有一个value属性,通过该属性,可以为其数据赋值
    1.同一个Provider,不要用到不同组件,如果需要在其他组件中用该数据,应该考虑将他提升到更高的层级
2.Consumer属性:因为函数组件中不能通过this.context属性获取数据,所以用ctx.Consumer组件获取
经常用Consumer属性获取数据,

**使用上下文中的数据**
1.在类组件中,直接使用this.context获取上下文数据
    1.要求:必须拥有静态属性 contextType , 应赋值为创建的上下文对象
2.在函数组件中,需要使用Consumer来获取上下文数据
    1.Consumer是一个组件
    2.它的子节点是一个函数(它的props.children需要传递一个函数)

**注意细节**

如果,上下文提供者(Context.Provider)中的value属性发生变化,会导致该上下文提供的所有后代元素全部重新渲染render,无论该子组件是否包含其内容
优化:用shouldComponentUpdate阻止因为父级context数据变化导致的render更新




