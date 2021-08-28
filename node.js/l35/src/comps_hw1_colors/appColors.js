import React,{Component} from "react";
import ChildColors from "./childColors";
import ExchangeApp from "./exchangeApp";

class AppColors extends Component{
  state = {fontColor:"orange"}

  changeH2 = (_val) => {
    this.setState({fontColor:_val});
  }

  render(){
    return(
      <div className="text-center">
        <ExchangeApp />
        <hr/>

        <h2 style={{color:this.state.fontColor}}>Colors app</h2>
        <h4>Select color:</h4>
        <ChildColors changeH2App={this.changeH2} />
      </div>
    )
  }
}

export default AppColors;