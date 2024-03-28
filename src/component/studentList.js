import React from 'react'
import Student from './student.js'
export default class StudentList extends React.Component{
    render(){
        return <ul>
            {this.props.strList.map(res => <Student key={res.title} {...res}/>)}
        </ul>
    }
}