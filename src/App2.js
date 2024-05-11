import React from 'react'
// import Test from './view/Rendering1'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <ComA />
            </div>
        )
    }
}

class ComA extends React.Component{
    state = {
        a:123,
        b:"abc"
    }
    componentDidUpdate(){
        console.log("componentDidUpdate ComA")
    }
    render(){
        return(
            <div>
                <h1>ComA a:{this.state.a}</h1>
                <ComB n={this.state.b}/>
                <button onClick={()=>{
                    this.setState({
                        a:321,
                        b:"kfc"
                    })
                }}>点击</button>
            </div>
        )
    }
}
function ComB(props){
    return(
        <div>
            <h1 id='title'>ComB b:{props.n}</h1>
            <ComC />
        </div>
    )
}

class ComC extends React.Component{
    componentDidUpdate(){
        // 为啥这个会先输出,看177行类组件的生命周期,这里走到的是ComA组件的render!
        console.log("componentDidUpdate ComC")
    }
    render(){
        let title = document.getElementById("title")
        if(title){
            // 这里获取的的DOM信息是没有更新前的,为啥,自己看生命周期,这里对应的是父组件的render(122行,才走到第三步而已,还没有进行后续步骤中的更新DOM)
            console.log(title.innerHTML)
        }else{
            // 页面首次加载为什么是null?才走到初次渲染的42行,第三步render,页面的虚拟DOM树还没有都构建完成,所以真实DOM是不会被挂载的,你这个时候你再render里取不到真实DOM
            console.log(title)
        }
        return(
            <div>
                <h1>ComC</h1>
            </div>
        )
    }
}