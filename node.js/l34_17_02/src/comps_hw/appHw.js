import React,{Component} from "react";
import Counter5 from "./counter5";
import Danger from "./danger";
import Gallery from "./gallery";
import Success from "./success";

class AppHw extends Component{

  ar2 = [
    "https://pixabay.com/get/g0474f215fddff3979406381dfcb02324636fa0b6d1103f5920aefb6161f5068af92628a3e0a8cd8a1dc045e8b13b6142_640.jpg",
    "https://pixabay.com/get/g8b74d441da1176d50bb626358e3f4a02098f7a0fc162d518442a3e2150662fd3d6cb7641f4c3ce53ad68216839346fe495d4f1c872cf36de4402a94b7b84fd7b_640.jpg",
    "https://pixabay.com/get/g7319dcf64582d7fd7f1def26da4743774e7e493796f4c37cd7782ddeada06bd0c50259997559b232afe52b7264aced1b_640.jpg"
  ]

  render(){
    return(
      <div>
        <Gallery title="Gallery of workers" ar2={this.ar2}/>
        <hr/>
        <Counter5 />
        <hr/>
        <Success message="Work form Apphw the parent" bg="greenyellow"/>
        <Danger message="Angular is for weak pepole!"/>
      </div>
    )
  }
}

export default AppHw;