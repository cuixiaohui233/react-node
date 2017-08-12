import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './toduList/css/index.css'
// import MainModel from './toduList/MainModule.js';
import HeadModel from './toduList/Sec';
import Li from "./toduList/Li"
import Footli from './toduList/footLi'
import registerServiceWorker from './registerServiceWorker';

class App extends Component{

  constructor(){
    super();
    this.state = {
      val:'',
      list:[
        {id:1,info:'今天不开心',checked:false},
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
  changeText = (id,val) =>{
    let {list} = this.state;
    let list1 = Object.assign(list);
    list1.forEach((e,i)=>{
      if(e.id === id && val){
        e.info = val;
      }
    })
    this.setState({
      list:list1
    })
  }
  noCheck = () => {
    // let
    this.setState({
      class:'selected'
    })
  }
  nooCheck = (checked,bool) => {
    // console.log(id);
    let {list} = this.state;
    let list1 = list;
    let arr = [];
    let arr1 = [];
    arr = list1.filter((e,i)=>e.checked == checked);
    arr1 = list1.filter(e => e.checked != checked)
    if(bool){
      this.setState({
        list:arr
      })
    }else{
      this.setState({
        list:arr1
      })
    }
  }
  okCheck = (checked) => {
    let {list} = this.state;
    let list1 = Object.assign(list);
    let arr = [];
    arr = list1.filter(e => {
      return e.checked === checked;
    })
    // console.log(arr);
    this.setState({
      list:arr
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
        delt:this.delt,
        changeText:this.changeText
      }
      return <Li {...data} />
    })
    let list2 = Object.assign(list);
    let all = list2.every(e => e.checked)
    // console.log(all);
    let list3 = Object.assign(list);
    let n = 0;
    for(var i=0;i<list3.length;i++){
      if(!list3[i].checked){
        n++;
      }
    }
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
        <footer
          className="footer" >
          <span className="todo-count">
            <strong>{n}</strong>
            <span>条未选中</span>
          </span>
        <Footli
          list = {this.state.list}
          nooCheck = {this.nooCheck}
          okCheck = {this.okCheck}
        />
        </footer>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
