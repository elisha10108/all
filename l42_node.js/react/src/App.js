import './App.css';
import React from 'react';
import Login from './compsAdmin_trivia/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuestionList from './compsAdmin_trivia/questionList';
import AddQForm from './compsAdmin_trivia/addQForm';
import NavAdmin from './compsAdmin_trivia/navAdmin';
import "./compsAdmin_trivia/css/admin.css";
import EditQForm from './compsAdmin_trivia/editQForm';
import {ToastProvider} from "react-toast-notifications"
import AppClientTrivia from './compsClient_trivia/appClientTrivia';
import LoginClient from './compsClient_trivia/loginClient';
import SignUp from './compsClient_trivia/signup';
import Game from './compsClient_trivia/game';


function App() {
  return (
    <Router>
      <ToastProvider>
        <Switch>
          {/* יצרנו ראוט נוסף שהתפריט אדמין יופיע רק 
          שמופיע תקיית אדמין ביו אר אל */}
            <Route path="/admin" component={NavAdmin} />

        </Switch>
        <Switch>
          <Route exact path="/" component={AppClientTrivia} />      
          <Route exact path="/loginClient" component={LoginClient} />      
          <Route exact path="/game" component={Game} />      
          <Route exact path="/signup" component={SignUp} />      
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/list" component={QuestionList} />
          <Route exact path="/admin/list/:pageNum" component={QuestionList} />
          <Route exact path="/admin/add" component={AddQForm} />
          <Route exact path="/admin/edit/:editId" component={EditQForm} />
        </Switch>
      </ToastProvider>
    </Router>
  );
}

export default App;
