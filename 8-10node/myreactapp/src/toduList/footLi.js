import React,{Component} from "react";
class Footli extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:this.props.list
    }
  }
  nooCheck = (ev) => {
    console.log(ev.target.hash);
    this.props.nooCheck(ev.target.hash);
  }
  click = () => {
    this.props.delChecked();
  }
  render(){
    return (
      <div>
      <ul className="filters">
        <li>
          <a href="#/all" className={this.state.class}
            onClick = {this.nooCheck}
          >全部</a>
        </li>
        <li>
          <a href="#/active" className={this.state.class}
            onClick = {this.nooCheck}
          >未完成</a>
        </li>
        <li>
          <a href="#/completed" className={this.state.class}
            onClick = {this.nooCheck}
          >已完成</a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick = {this.click}
      >
          清除完成项
      </button>
    </div>
    )
  }
}
export default Footli;
