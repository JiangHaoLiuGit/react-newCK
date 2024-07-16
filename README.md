# React动画

动画库 : react-transition-group

cssTransition

当进入时,发生:
1.为CSSTransition内部的DOM根元素(后续统一为DOM元素)添加样式enter(初始位置)
2.在下一帧(enter样式已经完全应用到了元素),立即为该元素添加样式enter-active(结束位置)
3.当timeout结束后,去掉之前的样式,添加样式enter-done(结束时设置样式)


当退出时,发生:
1.为CSSTransition内部的DOM根元素(后续统一为DOM元素)添加样式exit(初始位置)
2.在下一帧(exit样式已经完全应用到了元素),立即为该元素添加样式exit-active(结束位置)
3.当timeout结束后,去掉之前的样式,添加样式exit-done(结束时设置样式)

设置className,可以指定类样式的名称

1.字符串:为类样式添加前缀
2.对象:为每个类样式指定设置类样式名称(非前缀)

关于首次渲染的类样式 appear => appear-active => appear-done,它和enter唯一区别在于完成时会同时加入
appear-done和enter-done
