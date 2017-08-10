import React,{Component} from 'react';
import LI from '../LI/LI';
import Input from '../Input/Input'
class Ul extends Component{
  constructor(){
    super();
    this.state = {
      num:'active',
      arr:['今天','学习','react'],
      item:['选项一','选项二','选项三','选项四']
    }
  }
  click =  () =>{
      let {arr} = this.state;
      let arr1 = Object.assign(arr);
      arr1.push('哈哈');
      var val =
    this.setState({
        arr:arr1
    })
  }
  render(){
    let {arr,num,item} = this.state;
    let list = null;
    list = arr.map((e,i)=>{
      let data = {
        num:++i,
        txt:e,
        key:i,
        className:num
      }
      return <LI {...data} />
    });
    let input = <Input />
    let div = item.map((e,i)=>{
      let data1 = {
        key:i,
        className:'box'
      }
      return <div {...data1}>{e}</div>
    })
    return (
      <div>
      <form>{input}</form>
        <button
          onClick = {this.click}
          >按钮</button>
        <ul>
          {list}
        </ul>
        <div id="box">{div}</div>

      </div>
    )
  }
}
export default Ul
