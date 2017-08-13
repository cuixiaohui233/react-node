import React, { Component } from 'react';
import Menu1 from './comm/side/Menu1';
import Header from './comm/Head/Head';
import Nav from './comm/navigation/nav';
import Consult from './comm/Consultation/Consult';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <Menu1 />
        <Nav />
        <Consult />
      </div>
    );
  }
}

export default App;
