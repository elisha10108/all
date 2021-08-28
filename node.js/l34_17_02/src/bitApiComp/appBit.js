import React,{Component} from 'react';

class AppBit extends Component{
  // חשוב שמאפיין שהוא מערך יוגדר כך מהתחלה ככה
  // שלא נקבל אירור על זה שאנחנו מבצעים מאפ על פרופ שהוא לא מערך
  state = {ar:[]}

  componentDidMount(){
    // נבצע בקשת איי פי איי תמיד בקומפנינט דיד מאונט
    // בשביל שבהתחלה נציג מידע
    fetch("http://fs1.co.il/bus/bitcoin.php")
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ar:data});
    })
  }

  render(){
    return(
      <div className="container">
        <h1>List of crypto coins:</h1>
        <div className="row">
          {this.state.ar.map(item => {
            return(
              <div key={item.id} className="col-lg-6 border">
                <h2>{item.name}</h2>
                <div>Price: {Number(item.price_usd).toFixed(2)} USD</div>
              </div>
            )
          })}
        </div>
      </div> 
    )
}
}

export default AppBit