import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import AppAdmin from './admin/appAdmin';
import Home from "./home";

function AppMarket(props){
  return(
    <Router>
      {/* switch of the content */}
        <Switch>
          <Route exact path={`/`} component={Home} />
          {/* show appADmin when there /admin in the url */}
          <Route path={`/admin`} component={AppAdmin} />
      
        </Switch>  
    </Router>
  )
}

export default AppMarket

