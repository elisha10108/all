import './App.css';
import React from 'react';
import Login from './compsAdmin_toys/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ToysList from './compsAdmin_toys/ToysList';
import AddTForm from './compsAdmin_toys/addTForm';
import NavAdmin from './compsAdmin_toys/navAdmin';
import "./compsAdmin_toys/css/admin.css";
import EditTForm from './compsAdmin_toys/editTForm';
import {ToastProvider} from "react-toast-notifications"
import LoginClient from './compsClient_toys/loginClient';
import AppClientTrivia from './compsClient_toys/appClientToys';
import SignUp from './compsClient_toys/signup';
import ToysListClient from './compsClient_toys/listClient';
import MyInfo from './compsClient_toys/InfoClient';
import EditCTForm from './compsClient_toys/editTCForm';
import AddToys from './compsClient_toys/addTForm';


function App() {
  return (
    <div className="s_screen">
    
    <Router>
      <ToastProvider>

           <Switch>
            <Route path="/admin" component={NavAdmin} />

        </Switch>

        <Switch>

          <Route exact path="/" component={AppClientTrivia} />
          <Route exact path="/loginClient" component={LoginClient} />   
          <Route exact path="/signup" component={SignUp} />      
          <Route exact path="/list" component={ToysListClient} />      
          <Route exact path="/myInfo" component={MyInfo} />      
          <Route exact path="/myInfo/:pageNum" component={MyInfo} />      
          <Route exact path="/myInfo/:delId" component={MyInfo} />      
          <Route exact path="/list/:pageNum" component={ToysListClient} />      
          <Route exact path="/edit/:editId" component={EditCTForm} />
          <Route exact path="/addToys" component={AddToys} />
   
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/list" component={ToysList} />
          <Route exact path="/admin/list/:pageNum" component={ToysList} />
          <Route exact path="/admin/add" component={AddTForm} />
          <Route exact path="/admin/edit/:editId" component={EditTForm} />

        </Switch>
      </ToastProvider>
    </Router>
    </div>
  );
}

export default App;
