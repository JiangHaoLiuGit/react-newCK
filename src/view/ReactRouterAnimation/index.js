import React from 'react'
import * as Page from './page.js'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './index.css'
export default function Test() {
  return (
    <Router>
        <div className='container'>
            <Page.navPage>

            </Page.navPage>
            <div className='box'>
                <Route path="/home" component={Page.Home}></Route>
                <Route path="/news" component={Page.News}></Route>
                <Route path="/personal" component={Page.Personal}></Route>
            </div>
        </div>
    </Router>
  )
}
