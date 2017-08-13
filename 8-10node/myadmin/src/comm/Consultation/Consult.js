import React,{Component} from 'react';
import PickerSizesDemo from '../Data/Date';
import ShujuTable from '../table/table'
class Consult extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','分类','标题','更新时间','浏览次数','发布状态','操作'],
      data:[{
        id:1,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'草稿',
        动作:'审核',
        checked:false
      },{
        id:1,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'已发布',
        动作:'下架',
        checked:false
      }, {
        id:1,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'草稿',
        动作:'审核',
        checked:true
      }]
    }
  }
  render(){
    return (
      <div>
        <PickerSizesDemo />
        <ShujuTable data={this.state}/>
      </div>
    )
  }
}
export default Consult;
