# Ref - hook

函数名: Ref
有点和useState类似,都是可以当做数据内存空间,可以配合useState还有useEffect一起用

1.let n = useRef(1) let y = 1
组件重新渲染不会重新声明n，比如第一次组件渲染的时候n.current++ 变成二，y++也变成二，第二次渲染组件y会变成1，而n不会
2.n变化，比如n.current--不会重新render，而useState数据中的set方法变化会重新render

有一个场景,默认值为10,每秒减一,到了5和0的时候才能渲染视图,其余情况基本不变怎么做?
