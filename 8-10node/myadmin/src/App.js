import React, { Component } from 'react';
import Sider from './comm/side/Menu';
import Header from './comm/Head/Head.js';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <Sider />
      </div>
    );
  }
}

export default App;
