import React from 'react'
import Layout from '../Layout'
import Header from '../Header'
import Menu from '../Menu'
import {Route} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import StudentList from '../pages/StudentList'
import StudentAdd from '../pages/StudentAdd'
import CourseList from '../pages/CourseList'
import CourseAdd from '../pages/CourseAdd'

export default class Admin extends React.Component{
    render(){
        return <>
            <Layout
                header={<Header/>}
                aside={<Menu/>}
            >
                <Route path='/' exact component={Welcome}></Route>
                <Route path='/students' exact component={StudentList}></Route>
                <Route path='/students/add' exact component={StudentAdd}></Route>
                <Route path='/courses' exact component={CourseList}></Route>
                <Route path='/courses/add' exact component={CourseAdd}></Route>
            </Layout>
        </>
    }
}