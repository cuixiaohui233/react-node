import React,{Component} from "react";
class Footli extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:this.props.list
    }
  }
  nooCheck = () => {
    console.log(this.state.data);
    this.state.data.filter((e)=>{
      if(e.checked){
        this.props.nooCheck(e.checked)
      }
    });
  }
  okCheck = () => {
    console.log(this.state.data);
    this.state.data.filter((e)=>{
      if(e.checked){
        this.props.okCheck(e.checked)
      }
    });
  }
  render(){
    return (
      <div>
      <ul className="filters">
        <li>
          <a href="#/all" className={this.state.class}
            onClick = {this.allCheck}
          >全部</a>
        </li>
        <li>
          <a href="#/active" className={this.state.class}
            onClick = {this.nooCheck}
          >未完成</a>
        </li>
        <li>
          <a href="#/completed" className={this.state.class}
            onClick = {this.okCheck}
          >已完成</a>
        </li>
      </ul>
      <button
        className="clear-completed"
      >
          清除完成项
      </button>
    </div>
    )
  }
}
export default Footli;
