import React from 'react'
import RouterConfig from './RouterConfig'
import {Route , Switch} from 'react-router-dom'

function ergodic(routerArr,basePath){
    if(!Array.isArray(routerArr)){
        return null
    }
    let res = routerArr.map((it,i)=>{
        let {children ,path , component:Component , ...rest} = it
        // 
        let newPath = `${basePath}${path}`;
        // newPath = newPath.replace(/\/\//g,'');
        return (
            <Route  {...rest} path={newPath} key={i} render={values=>{
                
                return <Component {...values} >
                    {ergodic(it.children,newPath)}
                </Component>
                
            }}></Route>
        )
    })
    return <Switch>
        {res}
    </Switch>
}

export default function RouterView() {
  return <>
    {ergodic(RouterConfig,'')}
  </>
}
