import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Login from './login';
import ListProdAdmin from "./listProdAdmin";
import HeaderAdmin from './headerAdmin';
import AuthAdmin from "./authAdmin"
import AddProd from './addProd';
import CategoryList from './categoryList';
import AddCat from './addCat';
import UserList from './usersList';

function AppAdmin(props) {
  return (
    <React.Fragment>
      {/* סטריקט דואג שאנחנו באדמין ויו אר אל פנימי שלו */}
      <Route strict path={`/admin/`} component={AuthAdmin} />
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-2 bg-info" style={{ minHeight: "100vh" }}>
            <Link className="d-block" to="/admin/list">Products</Link>
            <Link  className="d-block" to="/admin/category">Category</Link>
            <Link  className="d-block" to="/admin/users">Users</Link>
          </nav>
          <div className="col-9">
            <Switch>
              <Route exact path={`/admin`} component={Login} />
              <Route exact path={`/admin/list`} component={ListProdAdmin} />
              <Route exact path={`/admin/addProd`} component={AddProd} />
              <Route exact path={`/admin/category`} component={CategoryList} />
              <Route exact path={`/admin/addCategory`} component={AddCat} />
              <Route exact path={`/admin/users`} component={UserList} />
            </Switch>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default AppAdmin