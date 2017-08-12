import React,{Component} from "react";
class Footli extends Component{
  constructor(){
    super();
    this.state = {
      class:''
    }
  }
  nooCheck = () => {
    // let class1 = 'selected';
    // this.setState({
    //   class:class1
    // })
    this.props.list.filter((e)=>{
      if(e.checked){
        this.props.nooCheck(e.checked,0)
      }
    });
  }
  okCheck = () => {
    this.props.list.filter((e)=>{
      if(e.checked){
        this.props.nooCheck(e.checked,1)
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
