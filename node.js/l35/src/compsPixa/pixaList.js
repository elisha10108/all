import React,{Component} from "react";
import PixaItem from "./pixaItem";

class PixaList extends Component{
// 13:10
  render(){
    let ar = this.props.pics_ar;
    return(
      <main className="container-fluid">
        <div className="container">
          <h2 className="display-4">List of pics:</h2>
          <div className="row">
            {ar.map(item => {
              return(
                <PixaItem key={item.id} item={item}/>
              )
            })}
          </div>
        </div>
      </main>
    )
  }
}

export default PixaList;