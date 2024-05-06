## Portals
有点像vue插槽
插槽:将一个React元素渲染到指定的DOM容器中

ReactDOM.createPortal(React元素,真实的DOM容器),该函数返回一个React元素

**用的时候如果有点击事件的话一定要注意时间冒泡,如果不注意会出大bug**

1.React中的事件是包装过的
2.它的时间冒泡顺序是更具React组件数来的,和真实的Dom树无关





