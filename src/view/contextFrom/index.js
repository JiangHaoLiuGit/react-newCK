import React from 'react'
import From from './from'
import Input from './fromInput.js'
import fromButton from './fromButton'
export default class Test extends React.Component{
    render(){
        return <>
            <From>
                <div>
                    账号 : <From.input name="loginId"></From.input>
                </div>
                <div>
                    密码 : <From.input name="loginPassword" type="password"></From.input>
                </div>
                <div>
                    <From.button onSubmit={(fromData)=>{
                        console.log(fromData)
                    }}>提交啊</From.button>
                </div>
            </From>
        </>
    }
}
From.input = Input
From.button = fromButton