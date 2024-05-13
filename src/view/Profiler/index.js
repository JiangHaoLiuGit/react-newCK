import React ,{Component,PureComponent} from 'react'
import {getAllStudents} from '../../serveices/students'

class Student extends PureComponent{
    render(){
        return <li>
            {Math.random() > 0.5?(
                <>
                    <span style={{
                    display:'inline-block',
                    width:700,
                    paddingRight:20,
                }}>
                    名字:{this.props.goods_name}
                </span>
                <span style={{
                    width:150,
                    display:'inline-block',
                    paddingRight:20,
                }}>
                    价格:{this.props.goods_price} 人民币
                </span>
                <span style={{
                    display:'inline-block',
                    paddingRight:20,
                }}>
                    goods_id:{this.props.goods_id}
                </span>
                </>
            ):<>
            <strong style={{
                display:'inline-block',
                width:700,
                paddingRight:20,
            }}>
                名字:{this.props.goods_name}
            </strong>
            <strong style={{
                width:150,
                display:'inline-block',
                paddingRight:20,
            }}>
                价格:{this.props.goods_price} 人民币
            </strong>
            <strong style={{
                display:'inline-block',
                paddingRight:20,
            }}>
                goods_id:{this.props.goods_id}
            </strong>
            </>}
        </li>
    }
}

class StudentList extends PureComponent{
    render(){
        let lis = this.props.uls.map(it => <Student key={it.goods_id} {...it}/>)
        return <ul>
            {lis}
        </ul>
    }
}
export default class Test extends PureComponent{
    state = {
        studentList:[]
    }
    getData = async () => {
        let data = await getAllStudents()
        this.setState({
            studentList:data.message.goods
        })
    }
    render(){
        return <>
            <button onClick={this.getData}>渲染组件</button>
            <button onClick={()=>{
                this.setState({
                    studentList:[]
                })
            }}>清空列表</button>
            <button onClick={()=>{
                this.setState({
                    studentList:[...this.state.studentList.sort(()=> Math.random() - 0.5)]
                })
            }}>乱序</button>
            {/* 可以通过Profiler这个插件直观看出来每个组件的响应时间!!!方便做组件性能优化 */}
            <StudentList uls={this.state.studentList} />
        </>
    }
}