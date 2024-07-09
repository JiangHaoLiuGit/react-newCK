# Reducer - hook

useReducer(分发器):
他存在的意义 => 把reducer(state,action)放进去返回一个dispatch函数,组件想改变数据调用
dispatch({type:'XXX'}) xxx意味着数据要干嘛,而不是代表逻辑.这个叫flux数据流规范
然后会创建一个useState
最后return [state,dispatch]

Flux: Facebook出品的一个数据流框架

简述:会把react的组件和处理数据的逻辑分离出来
处理数据的逻辑在reducer类型函数里处理逻辑
组件中调用方法的话用的是dispatch函数

好处的话会把组件中的计算数据的逻辑抽离出来写到reducer中!!!(计算逻辑从视图组件中抽离出来,牛)

1.规定了数据是单向流动的
2.数据储存在数据仓库中(目前,可以认为state就是一个储存数据的仓库)
3.action是改变数据的唯一原因(本质上就是一个对象,action有两个属性)
    1.type:字符串,动作的类型
    2.payload:任意类型,动作发生后的附加信息
    3.例如:如果是添加一个学生,action可以描述为:
        1.``{type:"addStudent",payload:{学生对象的各种信息}``
    4.例如,如果要删除一个学生,action可以描述为:
        1.``{type:"deleteStudent",payload:学生id}``
4.具体改变数据的是一个函数,该函数叫做reducer
    1.该函数接受两个参数
        1.state:表示当前数据仓库中的数据
        2.action:描述了如何去改变数据,以及变化数据的一些附加信息
    2.该函数必须有一个返回结果,用于表示数据仓库变化之后的数据
        1.Flux要求,对象是不可变的,如果返回对象,必须创建新的对象
5.如果要触发reducer,不可以直接调用,而是应该调用一个辅助函数dispatch
    1.该函数仅接受一个参数:action
    2.该函数会间接去调用reducer,已达到改变数据的目的

    