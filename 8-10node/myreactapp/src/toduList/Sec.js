import React,{Component} from "react";
import Li from "./Li";
class HeadModel extends Component{
  constructor(){
    super();
    this.state = {
      val:'',
      num:0,
      info:[
        {id:0,info:'今天',checked:false,class:1}
      ]
    }
  }
  changeChild = (id)=>{
    let {info} = this.state;
    info.forEach((e,i)=>{
      if(e.id === id){
        e.checked = !e.checked;
      }
    })
    this.setState({
      arr:info
    })
  }
  change = (ev) =>{
    this.setState({
      val:ev.target.value
    })
  }
  keyup = (ev) => {
    if(ev.keyCode === 13){
      let {info,num} = this.state;
      let arr = Object.assign(info);
      ++num;
      arr.push({id:num,info:ev.target.value,checked:false});
      this.setState({
        val:'',
        info:arr,
        num:num
      })
    }
  }
  render(){
    let {info} = this.state;
    console.log(this.state);
    let list = null;
    list = info.map((e,i)=>{
      let data = {
        txt:e.info,
        key:i,
        id:e.id,
        checked:e.checked,
        changeChild:this.changeChild
      }
      return <Li {...data} />
    });
    return(
      <div>
        <header className="header" >
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="请输入内容"
              value={this.state.val}
              onChange={this.change}
              onKeyUp={this.keyup}
            />
        </header>
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked="" />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
      </div>
    )
  }
}
export default HeadModel
