let user = '/uss'
export const routerConfig = {
    user:{
        root:user,
        info:`${user}/info`,
        pay:`${user}/pay`
    }
}

function Snum(item){
    // debugger; //启动调试工具,f9快捷键下一步,单步调试可以清楚看变量哪里出了问题,f8结束调试
    for(let i = 0 ; i < item ; i++){
        console.log(i)
    }
}
Snum(10)