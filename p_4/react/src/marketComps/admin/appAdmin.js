import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Login from './login';
import ListProdAdmin from "./listProdAdmin";
import HeaderAdmin from './headerAdmin';
import AuthAdmin from "./authAdmin"
import AddProd from './add/addProd';
import CategoryList from './categoryList';
import AddCat from './add/addCat';
import UserList from './usersList';
import EditUser from './edit/edittUser';
import AddUser from './add/addUser';
import EditProd from './edit/editProd';
import Editcat from './edit/editCat';

function AppAdmin(props) {
  return (
    <React.Fragment>
      {/* סטריקט דואג שאנחנו באדמין ויו אר אל פנימי שלו */}
      <Route strict path={`/admin/`} component={AuthAdmin} />
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-2  admin_nav_side" style={{ minHeight: "100vh" }}>
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
              <Route exact path={`/admin/addUser`} component={AddUser} />
              <Route exact path={`/admin/users/editUser/:editId`} component={EditUser} />
              <Route exact path={`/admin/EditProd/:editId`} component={EditProd} />
              <Route exact path={`/admin/EditCat/:editId`} component={Editcat} />
            </Switch>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default AppAdmin