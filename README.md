## 属性默认值 和 类型检查

## 属性默认值

通过一个静态的属性defaultProps 告知React属性默认值

## 属性检查

使用库 ``prop-types``

对组件使用propTypes 告知react如何检查静态属性格式

````js
PropTypes.any//任何类型
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.symbol
PropTypes.node
PropTypes.elementType
PropTypes.instanceOf(构造函数);必须是构造函数的实例,即 let obj = new NE()的话obj就是NE的实例
PropTypes.oneOf([xxx,xxx])枚举
PropTypes.oneOfType([XXX,XXX])//他的类型至少是XXX或者XXX里的一种,类型不能太离谱就行
PropTypes.arrayOf(PropTypes.XXX),必须是某一类型组成的数组,如:PropTypes.arrayOf(PropTypes.number)数组里只能是数字
PropTypes.objectOf(PropTypes.XXX),对象必须是某一类型的值组成,很鸡肋,一般不用
PropTypes.shape({})这个经常用,限制传对象的类型必须满足这个格式
PropTypes.exact({...})对象必须精确匹配传递的数据

属性:function(props,propName,componentName){
    // ...
}