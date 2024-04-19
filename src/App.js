import React from 'react'
import ClassComponent from './component/ClassComponent.js'
import FunComponent from './component/FunComponent.js'
import ValidationComp,{A,B} from './component/ValidationComp.js'
import Com from './component/Com'
import './App.css'

export default class App extends React.Component{
    render(){
        return(
            <>  
                <div className='p'>
                    <h1>类组件参数默认值</h1>
                    <ClassComponent n1="1.1" n2="2.2"></ClassComponent>
                </div>
                <div className='p'>
                    <h1>函数组件参数默认值</h1>
                    <FunComponent c1="100"></FunComponent>
                </div>
                <div className='p'>
                    <h1>组件传参默认值 + 参数类型限制</h1>
                    <ValidationComp 
                        name="江浩" 
                        isNan={true} 
                        age={26} 
                        F={Com} 
                        g={new B} 
                        sex="男" 
                        j={{
                            city:520,first:"杭州"
                        }} 
                        arrOf="arrOf111"
                        score={33}
                    />
                </div>
                
            </>
        )
    }
}