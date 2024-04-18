import React from 'react'

export default class Check extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dates: this.props.dates,
            name: this.props.name,
            chooseDates: this.props.chooseDates
        }
    }
    onChange=(e)=>{
        let newArr
        if(e.target.checked){
            newArr = [...this.props.chooseDates,e.target.value]
        }else{
            newArr = this.props.chooseDates.filter(it => it!=e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr , this.props.name , e)
    }
    getChooseDates(){
        return this.state.dates.map(it => (
            <label key={it.value}>
                <input type="checkbox"
                name={this.props.name}
                value={it.value} 
                checked={this.props.chooseDates.includes(it.value)}
                onChange={this.onChange}
                />{it.text}
            </label>
        ))
    }
    render(){
        let com = this.getChooseDates()
        return <>
            {com}
        </>
    }
}