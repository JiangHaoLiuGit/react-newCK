## 生命周期beforeCreate
源码角度深度探索生命周期

initRender() //声明vm._c(处理生成的render函数中的方法) 和vm.$createElement(处理用户自定义的render函数生成的方法)
callHook(vm,"beforeCreate")

//给props/methods/data/computed(把这些都添加到vm的根实例上,后期为了直接方便this.xxx访问获取
以及初始化watch,初始化watch后可以在(vm._watcher获取到,vm._watchers获取的是vm上的三种类型的watch,渲染watcher,计算属性watcher,侦听器watch或者也叫用户watcher)
initState(vm)
callHook(vm,'created')

$mount => mountComponent() => 
callHook(vm, 'beforeMount')

定义updateComponent => new Watcher(vm,updateComponent,noop(空函数),callHook(vm, 'beforeUpdate'))
vm._isMounted = true//标志vm._update(vm._render())执行完毕,最新的差异已经更新到了最新的dom,以及在vm.$el上打好补丁
callHook(vm, 'mounted') // 挂在完毕

和之前的$mount逻辑交织在一起的,new Wather后执行constructor() => get()之前会调用bofore => callHook(vm, 'beforeUpdate')
callHook(vm, 'beforeUpdate')

get() => 之后调用callHook(vm,'Updated')
callHook(vm, 'updated')

callHook(vm, 'beforeDistory')
