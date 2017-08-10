import React,{Component} from 'react';
import './li.css'
class LI extends Component{
  render(){
    return(
        <li>
          <span className={this.props.className}>{this.props.num}</span>
          <p>{this.props.txt}</p>
        </li>
    )
  }
}
export default LI
