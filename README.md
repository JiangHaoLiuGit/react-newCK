# React动画

动画库 : react-transition-group

SwitchTransition 用户有顺序的切换内部组件

CSSTransition的切换顺序是同步的,exit和enter是一起进行的,如果要分开的话实现费劲,所以就出现了SwitchTransition标签

默认情况下:mode:out-in(先出后进)

1.当key值改变时,会将之前的DOM根元素添加退出样式(exit,exit-active)
2.退出完成后,将该DOM元素移除
3.重新渲染内部DOM元素
4.为新渲染的DOM根元素添加进入样式(enter,enter-active,enter-done)

in-out:(效果实在很反人类,不推荐使用)
1.重新渲染内部DOM元素,保留之前的元素
2.新渲染的DOM根元素添加进入样式(enter,enter-active,enter-done)
3.将之前的DOM根元素添加退出样式(exit,exit-active)
4.退出完成后,将该DOM元素移除