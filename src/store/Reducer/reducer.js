// 用来定义默认数据,并导出一个函数

const defaultState = {
    str:'前段开发'
}

export const reducer = (state = defaultState,action)=>{
    switch(action.type){
        case 'change_active':
            return Object.assign({},state,action)
        default:
            return state;
    }
}