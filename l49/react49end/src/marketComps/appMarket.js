import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import AppAdmin from './admin/appAdmin';
import Home from "./client/home";
import LoginClient from './client/loginClient';
import "./client/css/homeList.css";

function AppMarket(props){
  return(
    <Router>
      {/* switch of the content */}

        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/login`} component={LoginClient} />
          {/* show appADmin when there /admin in the url */}
          <Route path={`/admin`} component={AppAdmin} />
      
        </Switch>  
    </Router>
  )
}

export default AppMarket

