import React,{Component} from 'react'
// import Test from './view/Rendering1'
// 考点:1新节点渲染(类组件生命周期)
// 数据变化后react如果更新
// 旧 <div><ComB></ComB></div>
// 新 <ComA></ComA>
// 新旧节点不同的情况下,会先创建新节点组件ComA > 销毁旧的ComB > 执行后续步骤133行1到6步!!!
export default class App extends React.Component{
    state = {
        isReg:false,
    }
    render(){
        // 反映react比对虚拟树的时候出现的现象:相同的元素节点会重用,如果不一样会先创建,后删除
        // 问题:为啥注册和登录的时候账号和密码都是同一个input,两个会共用,因为this.setState的时候,react会从虚拟DOM树中比对新旧节点
        // 因为一样所以不会删除节点会重用,不一样的会先添加新节点,然后删除旧节点,然后执行后续步骤(1-6步,先重新更新虚拟DOM树,然后更新真实DOM,然后执行后续队列回调函数)
        // 所以会出现共用第一个div中的账号和密码DOM,避免这种情况其实也很简单,添加不一样的key的话旧不会重用节点
        // 另外key值不会渲染到真实DOM上,仅仅存在到元素节点的属性上已经虚拟DOM树中的虚拟DOM中
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isReg:!this.state.isReg
                    })
                }}>登录/注册</button>
                {
                    this.state.isReg?(
                        <div>
                            <p>
                                账号:<input key="reg" type="text" />
                            </p>
                            <p>
                                密码:<input key="reg" type="password" />
                            </p>
                            <p>
                                <button>登录</button>
                            </p>
                        </div>
                    ):(
                        <div>
                            <p>
                                账号:<input key="login" type="text" />
                            </p>
                            <p>
                                密码:<input key="login" type="password" />
                            </p>
                            <p>
                                确认密码:<input type="password" />
                            </p>
                            <p>
                                <button onClick={()=>{
                                    this.setState({
                                        isReg:true
                                    })
                                }}>注册</button>
                            </p>
                        </div>
                        
                    )
                }
            </div>
        )
        
    }
}
