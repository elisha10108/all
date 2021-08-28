import React from 'react';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuestionList from './questionList';
import AddQForm from './addQForm';

function AppAdminTrivia(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/list" component={QuestionList} />
          <Route exact path="/admin/add" component={AddQForm} />

        </Switch>
    </Router>
  )
}

export default AppAdminTrivia