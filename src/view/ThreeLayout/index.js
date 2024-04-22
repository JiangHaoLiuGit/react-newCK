import React from 'react'
import ThreeLayout from '../../component/ThreeLayout'

export default class Test extends React.Component{
    render(){
        return(
            <>
                <ThreeLayout
                    left={<h2>我是左边</h2>}
                    right={<h2>我是右边</h2>}
                    padding={50}
                >
                    <h1>我是content主体</h1>
                </ThreeLayout>
            </>
        )
    }
}