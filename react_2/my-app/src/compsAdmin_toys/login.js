import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { doApiMethod, URL_API } from '../services/apiSer';
import { useToasts } from "react-toast-notifications";

function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory()
  let { addToast } = useToasts();

  let emailRef = register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
  let passRef = register({ required: true, minLength: 3 })

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    doApi(dataBody)
  }
  const doApi = async (dataBody) => {
    let url = URL_API + "/users/login";
    let data = await doApiMethod(url, "POST", dataBody);
    console.log(data);
    if (data.token) {
      addToast("Welcome to admin panel, you logged in",
        {
          appearance: 'success',
          autoDismiss: true
        })
      localStorage.setItem("tok", data.token);
      history.push("/admin/list");
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
    <main>
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3 text-light">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">כתובת אימייל</label>
          <input ref={emailRef} name="email" type="text" className="form-control" id="email" />
          {errors.email && <span className="text-danger">כתובת האימייל לא תקינה</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">סיסמא</label>
          <input ref={passRef} name="pass" type="password" className="form-control" id="pass" />
          {errors.pass && <span className="text-danger">הסיסמא חלשה מידי לפחות 3 אותיות</span>}
        </div>

        <button type="submit" className="btn btn-primary mx-auto d-block w-50">כניסה</button>


      </form>
    </main>
  )
}

export default Login