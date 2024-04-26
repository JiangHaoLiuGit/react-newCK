import React from 'react'
import {A,B} from '../../component/TestAandB'
import {WithTest} from '../../HOC/withTest'
import withLogin from '../../HOC/withLogin'
let ComA = withLogin(A)
ComA = WithTest(ComA)//isLog/in
let ComB = withLogin(B)
ComB = WithTest(B)

export default function Test(props){
    return <>
        <ComA isLogin={true} a={1}/>
        <ComB isLogin={false} b={2}/>
    </>
}