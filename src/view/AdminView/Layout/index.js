import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'

export default class Layout extends Component {
    static defaultProps = {
        header:propTypes.element,
        aside:propTypes.element,
        children:propTypes.arrayOf(propTypes.element)
    }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='container'>
                <header className='header'>
                    {this.props.header}
                </header>
                <div className='middle'>
                    <aside>
                        {this.props.aside}
                    </aside>
                    
                    <div className='main'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
