import React from 'react'
import {Link} from 'react-router-dom'
import RouterConfig from './RouterConfig'

export default function BetterLink({to , ...rest}) {
    // console.log("to1")
    // console.log(to)
    if(to.name && typeof to !== 'string'){
        to.pathname = getPathName(to.name , '/',RouterConfig)
    }
    // console.log("to2")
    // console.log(to)
    if(!to.pathname){
        throw new Error(`name属性${to.name}无效,请仔细检查配置文件中${to.name}是否存在`)
    }
    // console.log("to3")
    // console.log(to)
  return <Link {...rest} to={to} />
}
// 56:45
// 56:07
function getPathName(name , basePath , RouterConfig){
    for(const it of RouterConfig){
        let newPath = basePath + it.path
        newPath = newPath.replace(/\/\//g,'/');
        if(name == it.name){
            return newPath
        }else{
            if(Array.isArray(it.children)){
                const path = getPathName(name,newPath,it.children)
                if(path){
                    return path
                }
            }
        }
    }
    
    
}
