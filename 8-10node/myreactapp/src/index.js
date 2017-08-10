import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './toduList/css/index.css'
// import MainModel from './toduList/MainModule.js';
import HeadModel from './toduList/Sec.js';
import registerServiceWorker from './registerServiceWorker';


class App extends Component{
  render(){
    return(
      <div>
        <HeadModel />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
