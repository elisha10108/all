import React,{Component} from "react";
import "./css/danger.css"

class Danger extends Component{


  render(){
    return(
      <div className="danger">
        Danger: {this.props.message}
      </div>
    )
  }
}

export default Danger;