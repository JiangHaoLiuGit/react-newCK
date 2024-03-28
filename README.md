## 组件状态
类组件中可以设置自己的状态state,同时支持修改
函数组件中却不能,禁止使用

改变state的时候通过使用
this.setState({})修改,修改的同时组件的render函数也会重新渲染
而在vue中不用通过setState这种api修改数据然后触发更新
vue中对数据进行添加setting,如果数据发生变化调用setter方法触发dep.notify()
然后会执行dep构造函数中的方法去循环this.subs:[Wathcher]数组,挨个去执行wathcher的update方法
去调用vm.updata(vm.render)方法去更新视图