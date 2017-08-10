import React,{Component} from "react";
class Li extends Component{
  change = () => {
    // console.log(this.props.id);
    this.props.changeChild(this.props.id);
  }
  render(){
    return(
      <li className="completed">
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.checked}
                onChange={this.change}
              />
              <label>{this.props.txt}</label>
              <button className="destroy"></button>
          </div>
      </li>
    )
  }
}
export default Li;
