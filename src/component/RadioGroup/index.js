import React from 'react'

export default class Radio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dates:this.props.dates,
            sex:this.props.sex
        }
    }
    onChange = (e) => {
        if(e.target.checked){
            this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
        }
    }
    render(){
        let com = this.state.dates.map(it => (
            <label key={it.value}>
                <input type="radio"
                 name={this.state.name}
                 value={it.value}
                 checked={this.props.sex==it.value}
                 onChange={this.onChange} />{it.text}
            </label>
        ))
        return <>
            {com}
        </>
    }
}