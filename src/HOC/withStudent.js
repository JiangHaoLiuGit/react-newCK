import React,{Component} from 'react'
import {getStudents} from '../serveices/students.js'
export default function Students(Com){
    return class StudentsWro extends Component{
        constructor(props){
            super(props)
            this.state = {
                stu:[]
            }
        }
        async componentDidMount(){
            let arrs = await getStudents({})
            console.log(arrs)
            if(arrs.meta.status == 200){
                this.setState({
                    stu:arrs.message.goods
                })
            }
        }
        render(){
            return <Com {...this.props} stu={this.state.stu} />
        }
    }
}