import React,{Component} from "react";

class Params extends Component{

  render(){
    // כדי לאסוף פרמטר /params/:name
    let nameParam = this.props.match.params.name
    return(
      <div>
        <h2>Your name is:{nameParam}</h2>
      </div>
    )
  }
}

export default Params;