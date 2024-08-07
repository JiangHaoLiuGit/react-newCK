// 主要是用来创建仓库的,引用reducer,并导出状态
import {reducerOne} from './Reducer/reducer'
import { createStore } from 'redux' ;

export const store = createStore(reducerOne)