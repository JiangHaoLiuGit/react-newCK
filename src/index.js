import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentList from './component/studentList.js'
async function fetchAllStudents(){
  return await fetch("http://jsonplaceholder.typicode.com/posts")
               .then(res=>res.json()).then(res=>res).then(res=>res)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
fetchAllStudents()
async function render(){
  let studentList = await fetchAllStudents()
  root.render((
    <>
      <StudentList strList={studentList}/>
    </>
  ))
}
render()




