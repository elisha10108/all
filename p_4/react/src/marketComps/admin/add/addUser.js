
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import {  doApiMethod, URL_API } from '../../../services/apiSer'
import { useHistory } from "react-router-dom";

function AddUser(props) {

  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  let nameRef = register({ required: true, minLength:2,maxLength:100 });
  let emailRef = register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
  let passRef = register({ required: true, minLength: 3 })
  let phoneRef = register({ required: true, minLength: 7 });
  let addressRef = register({});

  

  // name:Joi.string().min(2).max(100).required(),
  // email:Joi.string().min(2).max(100).email().required(),
  // pass:Joi.string().min(2).max(100).required(),
  // phone:Joi.string().min(9).max(20).required(),
  // address:Joi.string().min(2).max(200).allow(null, ''),
  // avatarImg:Joi.string().min(2).max(200).allow(null, ''),


  const onFormSub = (dataBody) => {
    console.log(dataBody);
    
    // doApi(dataBody)
    doApi(dataBody);
  }

  const doApi = async(dataBody) => {
    let url = URL_API + "/users/" ;
    let data = await doApiMethod(url,"POST",dataBody);
console.log(data);
    if(data._id){
      alert("the user added");
      history.push("/admin/users");
    }
    else{
      alert("the email is alredy exssit");
    }
  }

  // 15:02

  return (
    <div className="container">
  
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>Add new Product</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">name</label>
          <input defaultValue="" ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.name && <span className="text-danger">Enter vaild name (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input defaultValue=" " ref={emailRef} name="email" type="text" className="form-control" id="email" />
          {errors.email && <span className="text-danger">Enter email (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="pass" className="form-label">password:</label>
          <input defaultValue="123" ref={passRef} name="pass" type="text" className="form-control" id="pass" />
          {errors.pass && <span className="text-danger">Enter valid password higer than 0</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">phone:</label>
          <input defaultValue="" ref={phoneRef} name="phone" type="text" className="form-control" id="phone" />
          {errors.phone && <span className="text-danger">Enter valid phone higer than 0</span>}
          </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">address:</label>
          <input defaultValue="" ref={addressRef} name="address" type="text" className="form-control" id="address" />
          {errors.address && <span className="text-danger">Enter valid address higer than 0</span>}
          </div>

        <button type="submit" className="btn btn-primary">Add product</button>


      </form>

    </div>
  )
}

export default AddUser