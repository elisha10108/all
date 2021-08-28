import React, { Component } from "react";

class ExchangeApp extends Component {
  state = {nis:0}
  // ref -> מקשר לאלמנטים בדומה לאיי די כדי שנוכל לאוסף מהם מידע
  // ויודע לאסוף מידע מדום של הריאקט ולא הדום של הדפדפן
  coinRef = React.createRef();
  amountRef = React.createRef();

  showTotalNis = () => {
    //console.log(this.coinRef)
    let total = this.coinRef.current.value * this.amountRef.current.value;
    this.setState({nis:total.toFixed(2)});
  }


// 10:50 

// פונקציה שפועלת פעם אחת שהקומפנינטה מופיעה
  componentDidMount(){
    this.showTotalNis();
  }

  render() {
    return (
      <div className="col-lg-6 mx-auto border">
        <div className="my-2">
          <label>Choose Coins</label>
          <select onChange={this.showTotalNis} ref={this.coinRef} className="form-select w-50 mx-auto">
            <option value="3.25">USD</option>
            <option value="3.8">Euro</option>
            <option value="0.11" >Bath</option>
          </select>
        </div>
        <div className="my-2">
          <label>Enter amount:</label>
          <input min="1" onInput={this.showTotalNis} ref={this.amountRef} className="form-control w-50 mx-auto" type="number" defaultValue="100" />
        </div>
        <h2>You will get: {this.state.nis}  NIS</h2>
      </div>
    )
  }
}

export default ExchangeApp;