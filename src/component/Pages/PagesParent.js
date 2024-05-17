import React from 'react'
import Pages from './Pages.js'
import Model from '../Model/Model.js'
import propTypes from 'prop-types'

export default class PagePesParent extends React.Component{
    static defaultProps = {
        panelNumber:5
    }
    static propTypes = {
        current:propTypes.number.isRequired,
        total:propTypes.number.isRequired,
        limit:propTypes.number.isRequired,
        panelNumber:propTypes.number
    }
    constructor(props){
        super(props)
        this.state = {
            current:props.current,
            total:props.total,
            limit:props.limit,
            panelNumber:props.panelNumber,
            onChangePage:this.onChangePage,
            isShow:false
        }
    }
    onChangePage= (page) => {
        this.setState({
            current:page
        })
        this.props.onPageNum && this.props.onPageNum(page)
    }
    render(){
        console.log("render Page",this.props,this.state)
        return <>
            <Pages {...this.props} onChangePage={this.onChangePage}/>
            <Model show={this.state.isShow}/>
        </>
    }
}