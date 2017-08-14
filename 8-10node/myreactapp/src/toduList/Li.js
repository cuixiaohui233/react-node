import React,{Component} from "react";
class Li extends Component{
  constructor(){
    super();
    this.state = {
      db:false
    }
  }
  change = (ev) => {
    // console.log(this.props.id);
    this.props.changeChecked(this.props.id);
  }
  del = () => {
    this.props.delt(this.props.id)
  }
  dblclick = () => {
    this.setState({
      db:true
    },()=>{
      this.db.focus();
      this.db.value = this.props.txt;
    });
  }
  blur = (num) => {
    let {id,txt} = this.props;

    this.props.changeText(id,this.db.value);

    this.setState({
      db:false
    });
  }
  keyup = (ev) => {
    // console.log(ev);
    if(ev.keyCode === 13){
      let {id} = this.props;
      this.props.changeText(id,this.db.value);

      this.setState({
        db:false
      });
    }
    if(ev.keyCode === 27){
      let {id,txt} = this.props;
      this.db.value = txt;
      this.setState({
        db:false
      });
    }
  }
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    // console.log(this.state.db)
    if(this.state.db){
      sClass += ' editing';
    }

    return(
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={checked}
                onChange={this.change}
              />
              <label
                onDoubleClick={this.dblclick}
                >{txt}
              </label>
              <button
                className="destroy"
                onClick = {this.del}
              ></button>
          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className ="edit"
            onBlur = {this.blur}
            onKeyUp = {this.keyup}
          />
      </li>
    )
  }
}
export default Li;
