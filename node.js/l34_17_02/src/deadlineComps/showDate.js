import React,{Component} from "react";

class ShowDate extends Component{
  state = {days: 999}

// מיטודה של המחלקה שפועלת אחרי שכל הרנדר התבצע והציג את המידע
// בפעם הראשונה שמופיעה
// בדרך כלל הקריאה לריסט איי פי איי תתבצע מהמיטודה כאן 
// בפעם הראשונה שהקומפנינטה מופיע
  componentDidMount(){
    console.log("comp mount");
    this.calcDays(this.props.deadline);
  }
// המיטודה תקרא כל פעם שיש שינוי בסטייט של הקומפנינטה או
// הפרופס שמועבר מהאבא הערך שלו השתנה
  componentDidUpdate(_oldProps,_oldState){
    console.log(_oldProps,this.props);
    if(_oldProps.deadline != this.props.deadline){
      this.calcDays(this.props.deadline);
    }
  }

  calcDays = (_deadline) => {
    // לחשב כמה מילי שניות נותרו עד התאריך שבאינפוט מעכשיו
    // date.parse -> מתרגם תאריך שנכניס לו לזמן יוניקס
    // Date.now() -> מחזיר בזמן יוניקס את הזמן של עכשיו
    let time = Date.parse(_deadline) - Date.now();
    let newDays = time / (1000 * 60 * 60 * 24);
    this.setState({days:Math.floor(newDays)})
  }

  render(){

   // console.log("render")
    return(
      <div className="text-center">
        <h1>Countdown to: {this.props.deadline}</h1>
        <h2>Days: {this.state.days}</h2>
      </div>
    )
  }
}

export default ShowDate;