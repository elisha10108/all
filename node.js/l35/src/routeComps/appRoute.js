import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import About from "./about";
import Gallery from "./gallery";
import Home from "./home";
import Page404 from "./page404";
import Params from "./params";

class AppRoute extends Component{
// 14:50 
  render(){
    return(
      <Router>
        <div className="container bg-dark p-3">
          <nav>
            {/* link -> חייב להיות עטוף באותה קומפנינטה או בשושלת של הקומפנינטה שלו
            בתגית ROUTER */}
            <Link className="text-white me-2" to="/">Home</Link>
            <Link className="text-white me-2" to="/about">About</Link>
            <Link className="text-white me-2" to="/gallery">Gallery</Link>
          </nav>
        </div>
        <div className="container">
          
          {/* switch - האזור באפליקציה שנרצה שתתחלף כאשר הראוט משתנה 
          ובנוסף מפעיל רק אחד מהרואטים
          */}
          <Switch>
            {/* exact -> אם לא שמים אז מספיק לו כמו בחיפוש שרק חלק מיו
            אר אל יהיה קיים */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/params/:name" component={Params}/>
            <Route  path="/" component={Page404}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRoute;