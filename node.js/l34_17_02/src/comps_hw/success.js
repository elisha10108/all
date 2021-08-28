import React,{Component} from "react";

class Success extends Component{
  compStyle = {
    background:this.props.bg,
    border:"4px solid green",
    fontSize:"2em",
    textAlign:"center"
  }

  render(){
    return(
      <div style={this.compStyle}>
        Success: {this.props.message}
      </div>
    )
  }
}

export default Success;