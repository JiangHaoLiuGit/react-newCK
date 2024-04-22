import React from 'react'

export default function withLogin(Com){
    return function Comp(props){
        if(props.isLogin){
            return <>
                <Com/>
            </>
        }else{
            return <>
                未登录         
            </>
        }
            
    }
}