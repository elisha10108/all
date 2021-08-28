import React,{Component} from "react";

class InputDate extends Component{

  // כדי לדבר עם אלמנט למשל אינפוט יש לייצר משתנה
  // שמשתמש ביכולת שנקראת ריף
  dateUser = React.createRef();
  

   changeDateInput = () => {
    console.log(this.dateUser.current.value)
    this.props.changeDateApp(this.dateUser.current.value);
  }

  render(){
    return(
      <div className="text-center mt-3 col-lg-4 mx-auto d-flex justify-content-center">
        {/* וכדי שהמשתנה יקבל את הערך של האלמנט יש לתת אטרביוט ריף שיהיה שווה למשתנה שהגדרנו */}
        <input ref={this.dateUser} defaultValue="2021-05-07" type="date" className="form-control col-7" />
        <button onClick={this.changeDateInput}  className="btn btn-warning col-5">Change date</button>
      </div>
    )
  }
}

export default InputDate;