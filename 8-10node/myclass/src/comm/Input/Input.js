import React,{Component} from 'react';
import Li from '../LI/LI';

class Input extends Component{
  constructor(){
    super();
    this.state = {
      val:'',//初始化表单的value，写成空字符串
      info:['一条']
    }
  }
  //解除受控表单
  change = (ev) =>{
    this.setState({
      val:ev.target.value
    })
  }
  keyup = (ev) =>{
    if(ev.keyCode === 13){
      let {info} = this.state;
      let arr2 = Object.assign(info);
      arr2.push(ev.target.value);
      this.setState({
        info:arr2,
        val:''
      })
    }
  }
  render(){
    let {info} = this.state;
    let list = null;
    list = info.map((e,i)=>{
      let data = {
        num:i,
        txt:e,
        key:i
      }
      return <Li {...data}/>
    })
    return (
      <div>
        <input
          type="text"
          value={this.state.val}
          onChange={this.change}
          onKeyUp={this.keyup}
        />
        <ul>
          {list}
        </ul>
      </div>

    )
  }
}
export default Input
