import React from 'react';
import AdminAuth from './adminAuth';
import { useForm } from "react-hook-form";
import { doApiMethod, URL_API } from '../services/apiSer';
import { Link, useHistory } from "react-router-dom";
import { useToasts} from "react-toast-notifications"


function AddTForm(props) {
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  let {addToast} = useToasts()
  
  let nameRef = register({ required: true, minLength: 3 });
  let infoRef = register({ required: true, minLength: 1 });
  let priceRef = register({ required: true, minLength: 1 });
  let catRef = register({ required: true });
  let imgRef = register();

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    
    doApi(dataBody)
  }

  const doApi = async(dataBody) => {
    if(dataBody.img.length == 0){
    }
    let url = URL_API+"/toys"
    let data = await doApiMethod(url,"POST",dataBody);
    console.log(data);
    if(data._id){
      addToast("the toys added",
      {
        appearance: 'info',
        autoDismiss: true
      })
      history.push("/admin/list");
    }
  }
  return (
    <div className="container text-light">
      <AdminAuth />
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>הוסף צעצוע</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">שם:</label>
          <input ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.name && <span className="text-danger">בבקשה הכנס שם</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="info" className="form-label">אודות:</label>
          <input ref={infoRef} name="info" type="text" className="form-control" id="info" />
          {errors.info && <span className="text-danger">בבקשה הכנס מידע אודות הצעצוע</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">מחיר:</label>
          <input ref={priceRef} name="price" type="text" className="form-control" id="price" />
          {errors.price && <span className="text-danger">הכנס מחיר</span>}
        </div>
       
        <div className="mb-3">
          <label htmlFor="category" className="form-label">קטגוריה</label>
          <select ref={catRef} name="category" id="category" className="form-select" >
            <option value="general">כללי</option>
            <option value="js">לילד</option>
            <option value="countries">לילדה</option>
            <option value="html">לנוער</option>
          </select>
          {errors.category && <span className="text-danger">בבקשה בחר קטגוריה</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">כתובת תמונה</label>
          <input ref={imgRef} name="img" type="text" className="form-control" id="img" />
        </div>
        <button type="submit" className="btn btn-primary">הוסף צעצוע</button>


      </form>
 
    </div>
  )
}

export default AddTForm