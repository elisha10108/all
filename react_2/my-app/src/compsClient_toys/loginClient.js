import React from 'react';
import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import {  doApiMethodd, URL_API } from '../services/apiSer';
import { Link } from 'react-router-dom';

function LoginClient(props) {
  const { register, handleSubmit, errors } = useForm();
  let emailRef = register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
  let passRef = register({ required: true, minLength: 3 })
  let history = useHistory()
  let { addToast } = useToasts();

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    doApi(dataBody)
  }

  const doApi = async (dataBody) => {
    let url = URL_API + "/users/login";
    let data = await doApiMethodd(url, "POST", dataBody);
    console.log(data);
    if (data.token) {
      addToast("you logged in",
        {
          appearance: 'success',
          autoDismiss: true
        })
      localStorage.setItem("token", data.token);
       history.push("/list");
    }
    else {
      addToast("Try again , user or password worng",
        {
          appearance: 'error',
          autoDismiss: true
        }
      )
    }
  }

  return (
    <div className="screen  text-light ">
      <div className="container  ">
        <h1 className="mt-5 text-center display-1 ">כניסה</h1>
        <form onSubmit={handleSubmit(onFormSub)} className="w-50 p-2  mt-3 mx-auto bg-light" >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">כתובת אימייל</label>
            <input ref={emailRef} name="email" type="text" className="form-control " id="email" />
            {errors.email && <span className="text-danger">בבקשה הכנס כתובת מייל תקינה</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">סיסמא:</label>
            <input ref={passRef} name="pass" type="password" className="form-control" id="pass" />
            {errors.pass && <span className="text-danger">סיסמא חלשה: כלול לפחות 3 תווים או אתיות</span>}
          </div>
        <div className="">
          <button type="submit" className="btn btn-primary mx-2">כניסה</button>
          <Link to={"/"} className="btn btn-danger">יציאה</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginClient

