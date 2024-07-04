import React from 'react'
// 不用hooks,用高阶组件解决
// 对比自定义hooks他不仅实现复杂,还会加深组件层次,导致项目不好维护,你找bug的时候看到一层层组件你会不会难受呢
// 而且会需要后面写ref转发
import {getStudents} from '../../../serveices/students'

function withStudent(Com){
    return class widthWrapperContent extends React.Component{
        state = {
            stu:[]
        }
        async componentDidMount(){
            let arr = await getStudents({})
            this.setState({
                stu:arr.message.goods
            })
        }
        render(){
            return <Com {...this.props} stu={this.state.stu} />
        }
    }
}
const MyHooks = withStudent(Test)

function Test(props){
    let lis = props.stu.map(it=> (<li key={it.goods_id}>{it.goods_name}</li>))
    return <>
        <h1>高阶组件用法示例</h1>
        <ul>
            {lis}
        </ul>
    </>
}

export default MyHooks