import React from 'react'
import restScroll from './restScroll'
export default function withScrollBar(Com){
    return class withScrollBar extends React.Component{
        componentDidMount(){
            window.scrollTo(0,0)
            // restScroll()
        }
        render(){
            return <Com {...this.props}/>
        }
    }
} 