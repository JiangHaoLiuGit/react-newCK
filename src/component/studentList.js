import React from 'react'
import Student from './student.js'
export default class StudentList extends React.Component{
    render(){
        return <ul>
            {this.props.strList && this.props.strList.length > 0?
            this.props.strList.map(res => <Student key={res.title} {...res}/>)
            :
            <Student />}
        </ul>
    }
}