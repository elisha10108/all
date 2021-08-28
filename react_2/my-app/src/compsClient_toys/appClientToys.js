import React from 'react';
import "./css/toy.css";
import { Link } from 'react-router-dom';

function AppClientTrivia(props){
  return(
    <div className="screen">
    
      <div className="container text-light">
        <h1 className="mt-5 display-1">toysExpress</h1>
        <Link to="/loginClient" className="col-lg-3 btn btn-success d-block mx-auto my-4">התחלה / כניסה</Link>
        <Link to="/signup" className="col-lg-3 btn btn-warning d-block mx-auto">הרשמה</Link>
      </div>
    </div> 
  )
}

export default AppClientTrivia