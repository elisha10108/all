import React, { Component } from "react";
import _ from "lodash";
import "./css/pixa.css";
import NavPixa from "./navPixa";
import PixaList from "./pixaList";

class AppPixa extends Component {
  state = {pics_ar:[]}

  componentDidMount(){
    let url = "https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=yellow+flowers&image_type=photo&pretty=true";
    this.doApi(url)
  }

  doApi = async(_url) => {
    try{
    let resp = await fetch(_url);
    let data = await resp.json();
   
    this.setState({pics_ar:data.hits})
    //just for test
    // this.sortBy("previewURL")
    }
    catch(err){
      alert("there is problem come back later");
    }
  }
// TODO: מהסלקט שנמצא בנאב שמשנים אותו יעשה מיון לפי מה שיש בווליו של האופציה שנבחרה
  sortBy = (_val) => {
    let temp_ar = _.sortBy(this.state.pics_ar,_val);
    this.setState({pics_ar:temp_ar})
  }

  render() {
    return (
      <div>
        <header style={{ backgroundImage: "url(/images/cover.jpg)" }} className="container-fluid">
          <div className="container">
            <h1 className="display-2">Pixa monkeys search!</h1>
            {/* <img src="images/cover.jpg" / > */}
          </div>
        </header>
        <NavPixa sortBy={this.sortBy} doApi={this.doApi}/>
        <PixaList pics_ar={this.state.pics_ar} />
       {/* AppPixa work */}
      </div>
    )
  }
}

export default AppPixa;