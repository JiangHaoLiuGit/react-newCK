import React, { Component } from 'react'
import {Switch , BrowserRouter as Router , Route} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './Admin'
import ctx from './context'

export default class Test extends Component {
  state = {
    name:"jianghao",
    changeName:val=>{
      console.log("val")
      console.log(val)
      this.setState({
        name:val
      })
    }
  }
  render() {
    return (
        <ctx.Provider value={this.state}>
          <Router>
              <Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/" component={Admin}></Route>
              </Switch>
          </Router>
        </ctx.Provider>
    )
  }
}
