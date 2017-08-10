import React from 'react';
import ReactDOM from 'react-dom';
// import Ul from './comm/UL/Ul';
// import Input from './comm/Input/Input'
import CtoP from './comm/CtoP/CtoP'
// import App from './App'
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';


// class Ul extends Component{
//   constructor(){
//     super();
//     this.state = {
//       num:'active',
//       arr:['今天','学习','react'],
//       item:['选项一','选项二','选项三','选项四']
//     }
//   }
//   render(){
//     let {arr,num,item} = this.state;
//     let list = null;
//     list = arr.map((e,i)=>{
//       let data = {
//         num:++i,
//         txt:e,
//         key:i,
//         className:num
//       }
//       return <LI {...data} />
//     });
//     let div = item.map((e,i)=>{
//       let data1 = {
//         key:i,
//         className:'box'
//       }
//       return <div {...data1}>{e}</div>
//     })
//     return (
//       <div>
//         <ul>
//           {list}
//         </ul>
//         <div id="box">{div}</div>
//
//
//       </div>
//     )
//   }
// }
// class LI extends Component{
//   render(){
//     return(
//       <li>
//         <span className={this.props.className}>{this.props.num}</span>
//         <p>{this.props.txt}</p>
//       </li>
//     )
//   }
// }
// ReactDOM.render(<Ul />, document.getElementById('root'));
// ReactDOM.render(<Input />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CtoP />, document.getElementById('root'));
registerServiceWorker();
