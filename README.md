# React 导航守卫

导航守卫:当离开一个页面,进入另一个页面时,触发的事件
vue中router有这种功能
react没有提供得自己写


history对象

- listen: 监听地址的变化,当地址发生变化时,会调用传递的函数
    - 参数:函数(handle)
        handle函数:
        - 参数一:location对象,记录当前的地址信息
        - 参数二:action,一个字符串,表示进入该地址的方式
            - POP:出栈(这里的意思是原有的页面中来回切面)
                - 通过点击浏览器后退\前进
                - 调用history.go
                - 抵用history.goBack
                - 调用history.goForward
            - PUSH:入栈(有新页面加入)
                - 调用history.push
            - REPLACE:替换
                - 调用history.replace或者<Link replace>
    - 返回结果:是一个函数,调用它可以取消监听
- block:设置一个阻塞,当页面跳转时,会进入阻塞,并会调用Router组件中的getUserConfirmation方法.
即在Router组件中的getUserConfirmation方法中可以设置一个拦截器,判断要不要跳转,比如判断有没有登录
    - 也会返回一个回调函数,用于取消阻塞器

路由根组件Router

- getUserConfirmation
    - 参数: 函数handle
        - 函数handle参数1:传过来的阻塞消息
        - 函数handle参数2:回调函数callback,如果调用callback(true)则跳转页面,否则不会跳转