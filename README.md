## React练习setState

1.this.setState是异步函数,
所以10行调用完了之后11行用同步代码访问的state还是之前的,

React会对异步的setState进行优化,将多次的setState进行合并(将多次状态改变完成后,在统一对state进行改变,然后触发)