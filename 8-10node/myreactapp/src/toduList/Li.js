import React,{Component} from "react";
class Li extends Component{
  change = (ev) => {
    // console.log(this.props.id);
    this.props.changeChecked(this.props.id);
  }
  del = () => {
    this.props.delt(this.props.id)
  }
  render(){
    return(
      <li className={this.props.checked?'completed':''}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.checked}
                onChange={this.change}
              />
              <label>{this.props.txt}</label>
              <button
                className="destroy"
                onClick = {this.del}
              ></button>
          </div>
      </li>
    )
  }
}
export default Li;
