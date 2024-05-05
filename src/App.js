import React from 'react'
import Test from './view/pureComponent'

export default class App extends React.Component{
    render(){
        console.log("App render")
        return(
            <>
                <Test></Test>
            </>
        )
    }
}