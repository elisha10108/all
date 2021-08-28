import React,{Component} from 'react';
import InputDate from './inputDate';
import ShowDate from './showDate';

class AppDeadline extends Component{
  state = {deadline:"2099-01-01"};

  changeDate = (_val) => {
    this.setState({deadline:_val})
  }

  render(){
    return(
      <div className="container">
        <ShowDate deadline={this.state.deadline}/>
        <InputDate changeDateApp={this.changeDate} />
      </div> 
    )
}
}

export default AppDeadline