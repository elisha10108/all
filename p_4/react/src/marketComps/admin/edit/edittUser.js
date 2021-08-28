
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import {  doApiMethod, URL_API } from '../../../services/apiSer';
import { useHistory } from "react-router-dom";

function EditUser(props) {

  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  let editid = props.match.params.editId;
  let nameRef = register({ });
  let addressRef = register({  });
  let avatarImgRef = register({ });
  let phoneRef = register({});


 




  const onFormSub = (dataBody) => {
    console.log(dataBody);
        doApi(dataBody);
  }

  const doApi = async(dataBody) => {
    let url = URL_API + "/users/" + editid;
    let data = await doApiMethod(url,"PUT",dataBody);

    if(data.n === 1){
      alert("the user update");
      history.push("/admin/users");
    }
    else{
      alert("There is problem try again later");
    }
  }

  return (
    <div className="container">
  
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>edit that user</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">name</label>
          <input defaultValue="" ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.name && <span className="text-danger">Enter vaild name (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">address</label>
          <input defaultValue=" " ref={addressRef} name="address" type="text" className="form-control" id="address" />
          {errors.address && <span className="text-danger">Enter address (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="avatarImg" className="form-label">avatarImg:</label>
          <input defaultValue="123" ref={avatarImgRef} name="avatarImg" type="text" className="form-control" id="avatarImg" />
          {errors.avatarImg && <span className="text-danger">Enter valid avatarImgword higer than 0</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">phone:</label>
          <input defaultValue="" ref={phoneRef} name="img" type="text" className="form-control" id="phone" />
          {errors.img && <span className="text-danger">Enter valid phone higer than 0</span>}
          </div>

        <button type="submit" className="btn btn-primary">edit the user</button>


      </form>

    </div>
  )
}

export default EditUser