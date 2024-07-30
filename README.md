# React 其他路由组件

已学习
- Router : BrowserRouter | HashRouter
- Route
- Switch
- 高阶函数: withRouter

## link

生成一个无刷新跳转的a元素

- to:可以是字符串:跳转的目标地址
    也可以是对象
    {
        pathname:url路径
        search
        hash
        state
    }
- replace:bool,表示是否替换当前地址,模式是false
- innerRef:返回内部的a元素,可以给a元素加事件,可以添加className,美化link元素

## NavLink

用来给当前选中的route增加样式的
- activeClassName:自定义样式名称,默认是active
- activeStyle:匹配是生效的样式
- exact:是否精确匹配
- sensitive: 匹配是是否区分大小写
- strict: 是否严格匹配最后一个斜杠

## Redirect

重定向组件,当加载到该组件时,会自动跳转(无刷新)到另一个地址
- to :跳转的地址
    - 字符串
    - 对象
    - push:默认为false,表示默认跳转使用替换的方式,设置为true后,则使用push的方式跳转
    - from:当匹配到from地址规则时才跳转


    


a标签阻止默认跳转怎么实现
a增加onclick=e=>{
    e.preventDefault()
}
