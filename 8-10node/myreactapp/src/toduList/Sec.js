import React,{Component} from "react";
import Li from "./Li";
class HeadModel extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value:this.props.val
  //   }
  // }
  change = (ev) =>{
    // console.log(this.props.changeChild)
    this.props.changeChild(ev.target.value)
    // this.setState({
    //   vlaue:ev.target.vlaue
    // })
    // this.props.changeChild(ev.target.value)
  }
  keyup = (ev) => {
    if(ev.keyCode === 13){
      let obj = {
        info:ev.target.value,
        id:+new Date,
        checked:false
      }
      // console.log(obj)
      this.props.changeValue(obj);
    }
  }
  render(){
    return(
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.change}
            onKeyUp={this.keyup}
          />
      </header>
    )
  }
}
export default HeadModel
