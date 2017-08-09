import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class UL extends Component{
  constructor(){
    super()
    this.state = {
      arr:['ES6de','好难'],
      num:0
    }
    this.click = this.click.bind(this);
  }
  click(){
    let {arr,num} = this.state;
    let list = Object.assign(arr);
    num++;
    list.push(num);
    this.setState({
      arr:list,
      num
    })
  }
  render(){
    let {arr} = this.state;
    let newArr = null;
    newArr = arr.map((e,i)=>{
        return <li key = {i}>{e}</li>
    })
    return (
      <div>
        <input type="text" />
        <button
          onClick = {this.click}
        >按钮</button>
        <ul>
           { newArr }
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<UL />,document.getElementById('app'))
