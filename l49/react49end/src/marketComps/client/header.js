import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"

function Header(props) {
  let history = useHistory();

  const onLogOut = () =>{
    // log out the user by delete the token
    localStorage.removeItem("tok");
    localStorage.removeItem("userName");
    history.push("/login");
  }
// 13:10
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row  align-items-center p-2">
          <div className="col-lg-6 d-flex align-items-center">
            <Link to="/" className="float-start me-2 col-lg-6">
              <img src="logo.png" className="w-100" />
            </Link>
            <div className="col-lg-6 d-flex">
              <input type="search" className="form-control" />
              <button className="btn btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            {(!localStorage["tok"]) ? 
            <Link to="/login" className="btn btn-outline-success">
              login/signup
            </Link>
            : 
            <button onClick={onLogOut} className="btn btn-outline-danger">
              {/* TODO: show the name of the user */}
              log out
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header