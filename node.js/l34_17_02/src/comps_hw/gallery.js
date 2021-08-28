import React,{Component} from "react";

class Gallery extends Component{
  state = {counter: 0};
  ar = this.props.ar2;
  // ar = [
  //   "images/pic1.jpg",
  //   "images/pic2.jpg",
  //   "images/pic3.jpg",
  //   "images/pic4.jpg",
  // ]

  nextPic = () => {
    this.setState({
      counter: this.state.counter < this.ar.length-1 ? this.state.counter + 1 : 0,
    })
  }

  backPic = () => {
    this.setState({
      counter: this.state.counter > 0 ? this.state.counter - 1 :  this.ar.length-1,
    })
  }

  render(){
    return(
      <div className="container text-center">
        <h1>{this.props.title}</h1>
        <img src={this.ar[this.state.counter]} className="w-25 d-block mx-auto mb-3" alt="worker"/>
        <button onClick={this.backPic} className="btn btn-danger">back</button>
        <button onClick={this.nextPic} className="btn btn-dark">next</button>
      </div>
    )
  }
}

export default Gallery;