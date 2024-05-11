import React,{Component} from 'react'
// 考点:加key和不加key有什么区别
// 不加key的话,会这样对比
// 旧 节点 children:[3,5]
// 新 节点 children:[100,3,5]
// 第一组3 和 100 不相等,替换
// 第二组5 和 3 不相等,替换
// 第三组空 和 5 ,创建新的
// 所以综上所述会操作三次
// 如果加key的话
// 第一步:会拿第一个节点的key100去旧的节点children比对, 不存在, 添加新的节点对象
// 第二步:拿第二个节点3去找,存在,不操作
// 第三步:拿第三个节点5去找,存在,不操作
// 综上所述,操作一次,效率大大提高
// 如果是数组是10000的长度
// 那么加key的话值也操作依次,不加key的话操作10001次!
export default class App extends React.Component{
    state = {
        arr:[3,5],
    }
    render(){
        let items = this.state.arr.map(it => (<li key={it}>{it}</li>))
        return (
            <div>
                <ul>
                    {items} 
                </ul>
                <button onClick={()=>{
                    this.setState({
                        arr:[parseInt(Math.random() * 1000),...this.state.arr]
                    })
                }}>增加</button>
            </div>
        )
        
    }
}
