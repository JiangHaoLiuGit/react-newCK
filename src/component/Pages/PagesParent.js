import React from 'react'
import Pages from './Pages.js'
import Model from '../Model/Model.js'

export default class PagePesParent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current:7,
            total:100,
            limit:9,
            panelNumber:5,
            onChangePage:this.onChangePage,
            isShow:false
        }
    }
    onChangePage= (page) => {
        this.setState({
            current:page
        })
    }
    render(){
        return <>
            <Pages {...this.state}/>
            <Model show={this.state.isShow}/>
        </>
    }
}