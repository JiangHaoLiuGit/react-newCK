import React,{Component} from 'react'
import Students from '../../../HOC/withStudent.js'
import ClassStudents from './ClassStudents.js'

let SutdentsList = Students(ClassStudents)
export default class UseCustom extends Component{
    render(){
        return <>
            <SutdentsList />
        </>
    }
}