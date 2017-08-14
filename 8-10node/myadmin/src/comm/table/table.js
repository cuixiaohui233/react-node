import React from 'react';
import Tr from './Tr';
import './table.css';
class ShujuTable extends React.Component{

  render(){
    let {data} = this.props.data;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      let data = {
        id:e.id,
        item:e.分类,
        标题:e.标题,
        更新时间:e.更新时间,
        浏览次数:e.浏览次数,
        发布状态:e.发布状态,
        动作:e.动作,
        key:i+new Date,
        checked:e.checked
      }
      return <Tr {...data}/>
    });
    let {title} = this.props.data;
    let title1 = Object.assign(title);
    let item = null;
    item = title1.map((e,i)=>{
      let data = {
        key:i
      }
      return <th {...data}>{e}</th>
    })
    return(
      <table>
        <thead>
          <tr>
            {item}
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }
}
export default ShujuTable;
// ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
