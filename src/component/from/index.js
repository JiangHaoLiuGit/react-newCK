import React from 'react'
import './index.css'

export default class From extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            password:"",
            city:"beijing",
            love:["football"],
            checkeds:false,
            loveObjs:[
                {value:"basketball",label:"篮球"},
                {value:"football",label:"足球"},
                {value:"music",label:"音乐"},
                {value:"movie",label:"电影"},
                {value:"other",label:"其他"},
            ],
            sex:""
        }
    }
    onChange = (e) => {
        let val = e.target.value
        let name = e.target.name
        if(e.target.type == "checkbox"){
            console.log(e)
            if(e.target.checked){
                this.setState({
                    love:[...this.state.love,val]
                })
            }else{
                // 删除数组中的某一项
                this.setState({
                    love:this.state.love.filter(it => it!=val)
                })
            }
        }else{
            this.setState({
                [name]:val
            })
        }
        
    }
    render(){
        // jsx 语法js返回元素格式加()不加就出不来
        let tem = this.state.loveObjs.map(item=>(<label key={item.value}>
            <input type="checkbox" name="love" value={item.value} checked={this.state.love.includes(item.value)} onChange={this.onChange}/> {item.label}
        </label>))
        
        return(
            <div className='from'>
                <div className="fromItem">
                    <div className="label">
                        账号:
                    </div>
                    <div className="item">
                        <input type='text' name='phone' value={this.state.phone} onChange={this.onChange} className='input'/>
                    </div>
                </div>

                <div className="fromItem">
                    <div className="label">
                        密码:
                    </div>
                    <div className="item">
                        <input type='password' name='password' value={this.state.password} onChange={this.onChange} className='input'/>
                    </div>
                </div>

                <div className="fromItem">
                    <div className="label">
                        性别:
                    </div>
                    <div className="item">
                        <label>
                            <input type='radio' name='sex' value="man" checked={this.state.sex == 'man'} onChange={this.onChange} className='input'/>男
                        </label>
                        <label>
                            <input type='radio' name='sex' value="girl" checked={this.state.sex == 'girl'} onChange={this.onChange} className='input'/>女
                        </label>
                        <label>
                            <input type='radio' name='sex' value="renyao" checked={this.state.sex == 'renyao'} onChange={this.onChange} className='input'/>人妖
                        </label>
                    </div>
                </div>

                <div className="fromItem">
                    <div className="label">
                        城市:
                    </div>
                    <div className="item">
                        <select name="city" value={this.state.city} onChange={this.onChange}>
                            <option value="beijing">北京</option>
                            <option value="chengdu">成都</option>
                            <option value="hangzhou">杭州</option>
                        </select>
                    </div>
                </div>
                <div className="fromItem">
                    <div className="label">
                        爱好:
                    </div>
                    <div className="item">
                        {tem}
                    </div>
                </div>

                <button onClick={()=>{
                    console.log(this.state)
                }}>提交</button>
                
            </div>
        )
    }
    
}