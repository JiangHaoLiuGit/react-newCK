import React, { Component } from 'react'
import ErrorComp from '../../component/ErrorComp'
import './index.css'
function ComA(){
    return <>
        <div className='Com'>
            <h1>ComA</h1>
            <ErrorComp>
                <ComB/>
            </ErrorComp>
        </div>
    </>
}
function createC(){
    let arr
    //  = [1,2,3]
    return arr
}
function ComB(){
    const spans = createC().map(it => (<span key={it}>我是色鬼{it}</span>))
    return <>
        <div className='ComB'>
            <h1>ComB</h1>
            {spans}
        </div>
    </>
}

function ComC(){
    return <>
        <div className='Com'>
            <h1>ComC</h1>
        </div>
    </>
}

export default class Test extends Component {
  render() {
    return (
      <div>
        <ComA />
        <ComC />
      </div>
    )
  }
}
