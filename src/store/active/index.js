// 这是active的构建函数

const sendActive = () => {
    // 我们需要返回一个 action 的对象
    return {
        type:"change_active",
        str:"重新修订的值"
    }
}

// export default sendActive
module.exports = {
    sendActive
}