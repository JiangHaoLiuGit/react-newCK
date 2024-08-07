# React 状态管理工具(Redux 和 ReactRedux)

- Redux 是一个原生状态管理工具
组成
1.State 状态
2.Reducer(是一个函数,根据传过来的active处理相应state)
3.Action事件(active是一个对象,必须包含type,描述reducer应该如何更新sate)
4.store(用来把active和reducer关联到一起,通过dispatch来发送action)

- ReactRedux 针对react所设计的状态管理工具(熟背这四步使用方式!!!)

- 1.安装
安装 npm i redux react-redux --save

- 2.仓库的创建
src => store => index.js + reducer.js
import {createStore} from 'redux'
const store = createStore(传递reducer)


- 3.提供器和连接器
提供器(用Provider组件把App组件包起来)
连接器(给需要用到状态的组件用的)

- 4.事件

在react中用redux是因为react有一个react-redux工具库,配合原生库(redux)来使用完成react的状态管理
其中js也可以用redux进行状态管理,vue也能用他

getState()获取state

dispatch()发送active

subscribe()注册监听 (也能通过他的返回值返回的对象注销监听)

构建react项目
npx create-react-app 项目名称