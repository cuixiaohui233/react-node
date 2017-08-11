import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './toduList/css/index.css'
// import MainModel from './toduList/MainModule.js';
import HeadModel from './toduList/Sec.js';
import Li from "./toduList/Li.js"
import registerServiceWorker from './registerServiceWorker';

class App extends Component{

  constructor(){
    super();
    this.state = {
      val:'',
      list:[
        {id:1,info:'今天不开心',checked:true},
        {id:2,info:'不为啥，别总问',checked:false}
      ]
    }
  }
  changeChild = (newVal) =>{
    // console.log(newVal)
    this.setState({
      val:newVal
    })
  }
  changeValue = (luv) => {
    // console.log(luv)
    let {list} = this.state;
    list.push(luv);
    this.setState({
      list:list,
      val:''
    })
  }
  changeChecked = (id) => {
    // console.log(id)
    let {list} = this.state;
    list.forEach((e)=>{
      if(e.id === id){
        e.checked = !e.checked;
      }
    })
    this.setState({
      list:list
    })
  }
  allChange = (ev) =>{
    let {checked} = ev.target;
    let {list} = this.state;
    let list1 = Object.assign(list);
    list1.forEach((e)=> e.checked = checked);
    this.setState({
      list:list1
    })
  }
  delt = (id)=>{
    // console.log(id)
    let {list} = this.state;
    let list1 = Object.assign(list);
    list1.forEach((e,i) =>{
      if(e.id === id){
        list1.splice(i,1)
      }
    })
    this.setState({
      list:list1
    })
  }
  render(){
    let {list} = this.state;
    let list1 = Object.assign(list);
    // console.log(list1);
    let item1 = null;
    item1 = list1.map((e,i)=>{
      let data = {
        txt:e.info,
        key:i,
        id:e.id,
        checked:e.checked,
        changeChecked:this.changeChecked,
        delt:this.delt
      }
      return <Li {...data} />
    })
    let list2 = Object.assign(list);
    let all = list2.every(e => e.checked)
    // console.log(all);
    return(
      <div>
        <HeadModel
          val={this.state.val}
          changeChild={this.changeChild}
          changeValue={this.changeValue}
        />
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked={all}
              onClick = {this.allChange}
            />
            <ul className="todo-list">
              {item1}
            </ul>
        </section>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
