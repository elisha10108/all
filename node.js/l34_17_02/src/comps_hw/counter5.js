import React,{Component} from "react";

class Counter5 extends Component{
  state = {counter:0};


// this.forceUpdate()
  plusCounter = () => {
   // this.state.counter++;
    this.setState({
      counter:(this.state.counter < 4) ? this.state.counter + 1 : 0
    });
  }

  minusCounter = () => {
    this.setState({
      counter:(this.state.counter > 0) ? this.state.counter - 1 : 4
    });
  }

  render(){
    return(
      <div className="container">
        <h2>The counte of hw</h2>
        <h2>{this.state.counter}</h2>
        <button onClick={this.minusCounter}>minus</button>
        <button onClick={this.plusCounter}>plus</button>

      </div>
    )
  }
}

export default Counter5;