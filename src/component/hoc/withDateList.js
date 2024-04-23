import React from 'react'
import types from '../../utils/componentTypes.js'
export default function withDataGroup(Com){
    return class groupWrapper extends React.Component{
        static defaultProps = {
            dates:[],
        }
        static propTypes = {
            dates:types.groupDates
        }
        render(){
            let com = this.props.dates.map(it => <Com key={it.value} info={it} {...this.props}/>)
            return <>
                {com}
            </>
        }
    }
}