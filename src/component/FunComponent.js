import React from 'react'

export default function FunComponent(props){
    return (
        <>
            <div>c1:{props.c1}</div>
            <div>c2:{props.c2}</div>
            <div>c3:{props.c3}</div>
        </>
    )
}
FunComponent.defaultProps = {
    c1:5,
    c2:6,
    c3:7
}