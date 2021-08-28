import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  doApiMethod, URL_API } from '../../services/apiSer';

function UsersList(props) {
  let [users_ar, setUsersAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = URL_API + "/users";
    let data = await doApiMethod(url,"GET");
    setUsersAr(data);
  }

  const delUser = async(_id) => {
    if(window.confirm("are you sure you want to delete?")){
      let url = URL_API + "/users/"+_id;
      let data = await doApiMethod(url,"DELETE",{});
      if(data.n === 1){
        //refresh the table
        doApi();
      }
      else{
        alert("you can't delete now or yoy trying to delete your self")
      }
    }
  }

  return (
    <div>
      <h1>List of the user:</h1>
      <Link to="/admin/addUser">add new user</Link>
      <table className="table table-striped">
        {/* TODO: mouseover will shoe info of prod */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>del/edit</th>
          </tr>
        </thead>
        {/* TODO: add pagenation */}
        <tbody>

          {users_ar.map((item,i) => {
            return (
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.role}</td>
                <td>
                  <button onClick={() => {
                    delUser(item._id);
                  }} className="btn btn-danger">del</button>
                 
                  <Link to={"/admin/users/editUser/"+ item._id} className="btn btn-dark ms-2">edit</Link>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default UsersList;