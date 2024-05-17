import React from 'react'
import './Pages.css'

export default function Pages(props){
    const pageNumber = getPageNumber(props)
    let minPage = cuntMin(props)
    let maxPage = cuntMax(minPage,props)
    let spanItem = []
    for(let i = minPage ; i <= maxPage ; i++ ){
        spanItem.push(<span onClick={()=>{onChange(props,i)}} className={props.current == i ? 'pageSpan active':'pageSpan'} key={i}>{i}</span>)
    }
    return <>
        <div className='pageDiv'>
            <span className={props.current == 1 ? "pageSpan disable":"pageSpan"} onClick={()=>{
                onChange(props,1)
            }}>首页</span>
            <span className={props.current == 1 ? "pageSpan disable":"pageSpan"} onClick={()=>{
                onChange(props,props.current-1)
            }}>上一页</span>
            {spanItem}
            <span className={props.current == pageNumber ? "pageSpan disable":"pageSpan"} onClick={()=>{
                onChange(props,props.current+1)
            }}>下一页</span>
            <span className={props.current == pageNumber ? "pageSpan disable":"pageSpan"} onClick={()=>{
                onChange(props,pageNumber)
            }}>尾页</span>
            <span>{props.current}</span>
            <span>/</span>
            <span>{pageNumber}</span>
        </div>
    </>
}

function getPageNumber(props){
    console.log("total",props.total)
    return Math.ceil(props.total/props.limit) > 0?Math.ceil(props.total/props.limit):'0'
}

function cuntMin(props){
    let num = props.current - Math.floor((props.panelNumber - 1)/2)
    if(num <= 1){
        num = 1
    }
    return num
}

function cuntMax(min,props){
    let num = min + props.panelNumber - 1
    if(num >= Math.ceil(props.total/props.limit)){
        num = Math.ceil(props.total/props.limit)
    }
    return num
}

function onChange(props,page){
    if(page > Math.ceil(props.total/props.limit) || page<= 0){
        return
    }
    props.onChangePage && props.onChangePage(page)
}