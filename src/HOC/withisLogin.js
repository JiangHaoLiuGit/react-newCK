import React from 'react'
import data from '../view/ReactRouterProtect/isLogin'
import {Redirect,Route} from 'react-router-dom'

export default function withisLogin(){
    return class Wrapper extends React.Component {
        render(){
            console.log(this.props)
            let {children , component:Component , render , ...rest} = this.props
            return <Route {...rest} render={values => {
                console.log(values)
                if(data.isLogin){
                    return <Component {...values}></Component>
                }else{
                    return <Redirect to={{
                        pathname:"/login",
                        state:{
                            loginUrl:values.location.pathname
                        }
                    }}>
                    </Redirect>
                }
            }}>
            </Route>
        }
    }
}