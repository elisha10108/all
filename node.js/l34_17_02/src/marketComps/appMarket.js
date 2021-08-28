import React, { Component } from "react";
import { market_ar } from "./data/marketData"
import ProdItem from "./prodItem";

class AppMarket extends Component {
  state = { ar: market_ar };
  
  render() {
    let ar = this.state.ar;
    return (
      <div className="container">
        <h2>Monkeys market:</h2>
        <div className="row">
          {ar.map((itemMap,i) => {
            return (
              <ProdItem key={itemMap.id} item={itemMap} />
              
            )
          })}
        </div>

      </div>
    )
  }
}

export default AppMarket;