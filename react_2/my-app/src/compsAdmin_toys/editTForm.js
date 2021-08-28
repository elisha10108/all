import React, { useEffect, useState } from 'react';
import AdminAuth from './adminAuth';
import { useForm } from "react-hook-form";
import { doApiGet, doApiMethod, URL_API } from '../services/apiSer';
import { Link, useHistory } from "react-router-dom";

function EditTForm(props) {
  let history = useHistory()
  let catForm_ar = ["כללי","לילד","לילדה","לנוער"];

  let editid = props.match.params.editId;
  let [qData,setQData] = useState({})
  const { register, handleSubmit, errors } = useForm();
  let nameRef = register({ required: true, minLength: 3 });
  let infoRef = register({ required: true, minLength: 1 });
 let catRef = register({ required: true });
  let imgRef = register();

  let priceRef = register({ required: true, minLength: 1 });


  useEffect(() => {
    getQDataFromApi()
  },[])

  const getQDataFromApi = async() => {
    let url = URL_API+"/toys/single/"+editid;
    let data = await doApiGet(url);
    console.log(data);

    setQData(data);
  }

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    
    doApi(dataBody)
  }

  const doApi = async(dataBody) => {
 
    let url = URL_API+"/toys/"+editid
    let data = await doApiMethod(url,"PUT",dataBody);
    console.log(data);
    if(data.n == 1){
      alert("question updated");
 
      history.push("/admin/list");
    }
  }
  return (
    <div className="container text-light s_screen2">
      <AdminAuth />

      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1 className="text-decoration-underline">ערוך צעצוע זה </h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">שם:</label>
          <input defaultValue={qData.name} ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.q && <span className="text-danger">בבקשה הכנס שם תקין</span>}
        </div>


        <div className="mb-3">
          <label htmlFor="info" className="form-label">אודות:</label>
          <input defaultValue={qData.info} ref={infoRef} name="info" type="text" className="form-control" id="info" />
          {errors.info && <span className="text-danger">בבקשה הכנס מידע לגבי הצעצוע</span>}
        </div>


        <div className="mb-3">
          <label htmlFor="price" className="form-label">מחיר:</label>
          <input defaultValue={qData.price} ref={priceRef} name="price" type="text" className="form-control" id="price" />
          {errors.price && <span className="text-danger">בבקשה הכנס מחיר</span>}
        </div>


        
        <div className="mb-3">
          <label htmlFor="category" className="form-label">קטגוריה</label>
          <select  ref={catRef} name="category" id="category" className="form-select" >
            {catForm_ar.map((item,i) => {
              return(
                <option selected={(qData.category == item)}
                key={i} value={item}>
                  {item}
                  </option>
                )
         
            })}
    
          </select>

          {errors.category && <span className="text-danger">בחר קטגורחה</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">כתובת תמונה</label>
          <input defaultValue={qData.img}  ref={imgRef} name="img" type="text" className="form-control" id="img" />
        </div>
        <button type="submit" className="btn btn-primary">עדכן צעצוע זה</button>


      </form>
  
    </div>
  )
}

export default EditTForm