import React from 'react'
import {Link} from 'react-router-dom'
export default function Menu() {
  return (
    <ul>
      <li><Link to="/students">学生列表</Link></li>
      <li><Link to="/students/add">新增学生</Link></li>
      <li><Link to="/courses">课程列表</Link></li>
      <li><Link to="/courses/add">新增课程</Link></li>
    </ul>
  )
}
