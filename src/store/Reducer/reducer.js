// 用来定义默认数据,并导出一个函数

const defaultState = {
    str:'前段开发'
}

const reducerOne = (state = defaultState,action)=>{
    // let newState = JSON.parse(JSON.stringify(state))
    // switch(action.type){
    //     case 'change_active':
    //         newState.str = action.value
    //     default:
    //         break;
    // }
    // return newState
    switch(action.type){
        case 'change_active':
            return Object.assign({},state,action)
        default:
            console.log("?")
            return state;
    }
}
module.exports = {
    reducerOne
}