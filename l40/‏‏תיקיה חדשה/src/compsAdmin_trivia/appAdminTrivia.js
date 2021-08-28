import React from 'react';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuestionList from './questionList';
import AddQForm from './addQForm';
import NavAdmin from './navAdmin';
import "./css/admin.css";
import EditQForm from './editQForm';
import {ToastProvider} from "react-toast-notifications"

function AppAdminTrivia(props) {
  return (
    <Router>
      <ToastProvider>
        <NavAdmin /> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/list" component={QuestionList} />
          <Route exact path="/admin/list/:pageNum" component={QuestionList} />
          <Route exact path="/admin/add" component={AddQForm} />
          <Route exact path="/admin/edit/:editId" component={EditQForm} />

        </Switch>
      </ToastProvider>
    </Router>
  )
}

export default AppAdminTrivia