import React , {useState} from 'react'
import * as Page from './page.js'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import './index.css'
import 'animate.css'

function MyTransition({visible, children} ){
    return <CSSTransition appear mountOnEnter in={visible} timeout={500} classNames={{
        exitActive:"animate__fadeOutLeft",
        exitDone:"exit-done",
        enterActive:"animate__fadeInRight",
        appearActive:"animate__fadeInRight"
    }}>
        {children}
    </CSSTransition>
}

export default function Test() {
    let [hide , setHide ] = useState(true)
  return (
    <Router>
        <div className='container'>
            <Page.navPage>

            </Page.navPage>
            <div className='box'>
                <Route path="/" exact>
                    {({match})=>{
                        //  component={Page.Home}
                        console.log(match)
                        if(match){
                            return <MyTransition visible={hide}>
                                <Page.Home/>
                            </MyTransition>
                            
                        }else{
                            return <MyTransition visible={!hide}>
                                <Page.Home/>
                            </MyTransition>
                        }
                    }}
                </Route>
                <Route path="/news" exact >
                    {({match})=>{
                        //  component={Page.Home}
                        console.log(match)
                        if(match){
                            return <MyTransition visible={hide}>
                                <Page.News/>
                            </MyTransition>
                            
                        }else{
                            return <MyTransition visible={!hide}>
                                <Page.News/>
                            </MyTransition>
                        }
                    }}
                </Route>

                <Route path="/personal" exact >
                    {({match})=>{
                        //  component={Page.Home}
                        console.log(match)
                        if(match){
                            return <MyTransition visible={hide}>
                                <Page.Personal/>
                            </MyTransition>
                            
                        }else{
                            return <MyTransition visible={!hide}>
                                <Page.Personal/>
                            </MyTransition>
                        }
                    }}
                </Route>
            </div>
        </div>
    </Router>
  )
}
