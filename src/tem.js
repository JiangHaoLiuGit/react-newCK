import React from 'react'

export default function Tem(props){
    console.log("props",props)
    return (
        <>
            {props.children}
            {props.children2}
            {props.children3}
        </>
    )
}