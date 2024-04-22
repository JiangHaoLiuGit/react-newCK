import React from 'react'
import Model from '../../component/Model'
import "./index.css"
export default class App extends React.Component{
    state = {
        show:false
    }
    imgShow = () => {
        this.setState({
            show:true
        })
    }
    imgClose = () => {
        this.setState({
            show:false
        })
    }
    
    render(){
        let com = this.state.show?<Model close={this.imgClose}><img className='AppImg' onClick={this.imgShow} src="https://img0.baidu.com/it/u=3844558416,1704394707&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1713286800&t=093c2a78365377542ea30a0d80d9207c" alt="" /></Model>:''
        return(
            <div className='body'>
                {com}
                <img className='AppImg' onClick={this.imgShow} src="https://img0.baidu.com/it/u=3844558416,1704394707&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1713286800&t=093c2a78365377542ea30a0d80d9207c" alt="" />
            </div>
        )
    }
}