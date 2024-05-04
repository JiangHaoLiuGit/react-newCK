import React from 'react'
import ctx from './fromContext'
const {Provider} = ctx
export default class From extends React.Component{
    state = {
        formData:{
            loginId:"阿斯蒂芬",
            loginPassword:"34"
        },
        changeInput:(name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            })
        }
    }
    render(){
        
        return <>
            <h1>contextFrom</h1>
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        </>
    }
}