import React from 'react';
import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { doApiMethod, URL_API } from '../services/apiSer';
import { Link } from 'react-router-dom';

function SignUp(props) {
  const { register, handleSubmit, errors } = useForm();
  let nameRef = register({ required: true, minLength:2,maxLength:100 });
  let emailRef = register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
  let passRef = register({ required: true, minLength: 3 })
  let history = useHistory()
  let { addToast } = useToasts();

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    doApi(dataBody)
  }

  const doApi = async (dataBody) => {
    let url = URL_API + "/users/";
    let data = await doApiMethod(url, "POST", dataBody);
    console.log(data);
    if (data._id) {
      addToast("הצלחת להרשם, גאון",
        {
          appearance: 'success',
          autoDismiss: true
        })
      history.push("/loginClient");
    }
    else {
      addToast("יש בעיה כרגע בשרת, תחזור בעוד שעה לפחות או המשתמש קיים",
        {
          appearance: 'error',
          autoDismiss: true
        }
      )
    }
  }

  return (
    <div className="screen text-light">
      <div className="container ">
        <h1 className="mt-5 display-1 ">הרשמה למערכת</h1>
        <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">שם:</label>
            <input ref={nameRef} name="name" type="text" className="form-control" id="name" />
            {errors.name && <span className="text-danger">בבקשה הכנס שם</span>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">כתובת אימייל</label>
            <input ref={emailRef} name="email" type="text" className="form-control" id="email" />
            {errors.email && <span className="text-danger">בבקשה הכנס כתובת מייל תקינה</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">סיסמא:</label>
            <input ref={passRef} name="pass" type="password" className="form-control" id="pass" />
            {errors.pass && <span className="text-danger">סיסמא חלשה: כלול לפחות 3 תווים או אתיות</span>}
          </div>


          <button type="submit" className="btn btn-primary">הרשמה</button>
          <Link to={"/"} className="btn btn-danger">יציאה</Link>


        </form>
      </div>
    </div>
  )
}

export default SignUp