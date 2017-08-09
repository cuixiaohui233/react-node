import React,{Component} from 'react';
import ReactDom from 'react-dom';

class List extends Component{
    constructor(){
      super();
      this.state = {
        list:[],
        num:0,
        value:''
      }
      this.click = this.click.bind(this);
    }
    click(){
      let arr = ['图书','电影','歌曲','电视剧'];
      let val = document.getElementById('txt').value;
      let n = 0;
      this.setState({
        list:arr,
        num:++n,
        value:val
      })
    }
    render(){
      let {list,num,value} = this.state;
      var newList = list.map((e,i)=>{
        return <li key={i}>{e}</li>
      })
      let newP = <p>{value}</p>
      return (
        <div>
          <input type="text" id="txt" /><button
            onClick={ this.click }
            >按钮</button>
          <ul>
            {newList}
          </ul>
          {newP}
        </div>
      )
    }
}
ReactDom.render(<List />,document.getElementById('app'))
