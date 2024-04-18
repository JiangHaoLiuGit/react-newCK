import React from 'react'

export default class Radio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dates:this.props.dates,
        }
    }
    onChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
    }
    render(){
        let com = this.state.dates.map(it => (
                <option value={it.value} key={it.value}>{it.text}</option>
        ))
        return <>
            <select name={this.props.name} value={this.props.city} onChange={this.onChange}>
                {com}
            </select>
        </>
    }
}