import React,{Component} from "react";

class ChildColors extends Component{

  changeParentH2Color = (_val) => {
    this.props.changeH2App(_val);
  }

  // דוגמא איך להוציא מידע מדאטא של תגית
  testData = (e) => {
    console.log(e.target.value);
    console.log(e);
    alert(e.target.dataset.koko);
  }

  changeParentH2ColorViaData = (e) => {
    this.props.changeH2App(e.target.dataset.color);
  }

  render(){
    return(
      <div>
        <h4>Child comp, choose color:</h4>
        <button value="yoyo" data-koko="momo" onClick={this.testData}>check data test</button>
        <button data-color="pink" onClick={this.changeParentH2ColorViaData}>pink Data way to send params</button>


        <button 
        onClick={() => {this.changeParentH2Color("red")}}>
          red</button>
          <button 
        onClick={() => {this.changeParentH2Color("blue")}}>
          blue
          </button>
        <button 
        onClick={() => {this.changeParentH2Color("green")}}>
          green</button>
      </div>
    )
  }
}

export default ChildColors;