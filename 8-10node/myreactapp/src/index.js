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
      ],
      view:'#/all'
    }
  }

  componentDidMount(){
    this.setState({
      list:getItem('data')
    });
    console.log('挂载之后');
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
      }else if(!val){
        list1.splice(i,1);
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
  //显示
  nooCheck = (newView) => {
    this.setState({
      view:newView
    })
  }
  delChecked = () => {
    let {list} = this.state;
    let list1 = Object.assign(list);
    let arr = null;
    arr = list1.filter((e,i)=>{
      return e.checked;
    });
    console.log(arr)
    this.setState({
      list:arr
    })
  }
  render(){
    let {list} = this.state;
    let list1 = Object.assign(list);
    if(list.length){
      localStorage.setItem('data',JSON.stringify(list));
    }
    // console.log(list1);
    let item1 = null;
    let filterView = Object.assign(list);
    filterView = filterView.filter(e=>{
      switch (this.state.view) {
        case '#/active':
          return !e.checked;
          break;
        case '#/completed':
          return e.checked;
          break;
        default:
          return Object.assign(list);
          break;
      }
    });
    // console.log(filterView)
    item1 = filterView.map((e,i)=>{
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
    // console.log(list)
    let changeAll = null
    let footr = null;
    if(list.length){
      changeAll = (
        <input
          className="toggle-all"
          type="checkbox"
          checked={all}
          onClick = {this.allChange}
          onChange= {this.allChange}
        />
      )
      let datax = {
        list:this.state.list,
        nooCheck:this.nooCheck,
        okCheck:this.okCheck,
        delChecked:this.delChecked
      }
      footr = (
        <footer
          className="footer" >
          <span className="todo-count">
            <strong>{n}</strong>
            <span>条未选中</span>
          </span>
        <Footli {...datax} />
        </footer>
      )
    }
      return(
      <div>
        <HeadModel
          val={this.state.val}
          changeChild={this.changeChild}
          changeValue={this.changeValue}
        />
        <section className="main">
            {changeAll}
            <ul className="todo-list">
              {item1}
            </ul>
        </section>
        {footr}
      </div>
    )
  }
}

function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{checked:false,info:'呵呵',id:1}];
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
