import React,{Component} from 'react'

export default class ClassStudents extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let lis = this.props.stu.map(it => <li key={it.goods_id}>{it.goods_name}</li>)
        console.log("stu",this.props.stu)
        return <ul>
            {lis}
        </ul>
    }
}