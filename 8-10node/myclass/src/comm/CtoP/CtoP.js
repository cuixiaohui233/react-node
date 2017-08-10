import React,{Component} from 'react';
class CtoP extends Component{
  constructor(){
    super();
    this.state = {
      arr:[
        {id:1,txt:'第一个',checked:false},
        {id:2,txt:'第二个',checked:false},
        {id:3,txt:'第三个',checked:false},
        {id:4,txt:'第四个',checked:true}
      ]
    }
  }
  //通过传递父组件的函数来得知子组件的状态
  changeChild = (id)=>{
    // console.log(id)
    let {arr} = this.state;
    arr.forEach((e,i)=>{
      if(e.id === id){
        e.checked = !e.checked;
      }
    })
    this.setState({
      arr:arr
    })
  }
  render(){
    let {arr} = this.state;
    let list = null;
    list = arr.map((e,i)=>{
      let data = {
        txt:e.txt,
        id:e.id,
        checked:e.checked,
        key:i,
        changeChild:this.changeChild
      }
      return <LI {...data} />
    });
    return(
      <ul>{list}</ul>
    )
  }
}
class LI extends Component{
  change = ()=>{
    //通过将父组件的id传递给父组件的函数，然后在父组件的函数里通过ID判断子组件的状态
    this.props.changeChild(this.props.id);
  }
  render(){
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.change}
        />
        <span>{this.props.txt}</span>
      </li>
    )
  }
}
export default CtoP
