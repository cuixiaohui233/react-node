import React,{Component} from "react";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './side.css'
const SubMenu = Menu.SubMenu;
class Sider extends Component {
  state = {
    theme: 'Light',
    current: '0',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="side-div">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>咨询管理</span></span>}>
            <Menu.Item key="1">咨询管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>图片管理</span></span>}>
            <Menu.Item key="5">图片管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Sider
