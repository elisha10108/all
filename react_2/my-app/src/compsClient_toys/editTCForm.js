import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { doApiGet, doApiMethodd, URL_API } from '../services/apiSer';
import { Link, useHistory } from "react-router-dom";

import CheckClient from './checkC';

function EditCTForm(props) {
  let history = useHistory()
  let catForm_ar = ["כללי","לילד","לילדה","לנוער"];

  let editid = props.match.params.editId;
  let [TData,setTData] = useState({})
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

     setTData(data);
  }

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    
    doApi(dataBody)
  }

  const doApi = async(dataBody) => {

    let url = URL_API+"/toys/edit/"+editid;
    let data = await doApiMethodd(url,"PUT",dataBody);

    if(data.n == 1){
      alert("question updated");
 
      history.push("/myInfo");
    }
    else{
      alert("the product is not yous or there is a problem whith the server");
      history.push("/list");
    }
  }
  
  return (
    <div className="container">
      <CheckClient/>
      <Link to="/list" className="w-25 btn btn-warning d-block mx-auto">חזרה לרשימה </Link>

      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3 text-light text-center">
        <h1 className="text-decoration-underline">ערוך צעצוע </h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">שם:</label>
          <input defaultValue={TData.name} ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.q && <span className="text-danger">בבקשה הכנס שם</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="info" className="form-label">אודות:</label>
          <input defaultValue={TData.info} ref={infoRef} name="info" type="text" className="form-control" id="info" />
          {errors.info && <span className="text-danger">בבקשה הכנס מידע על הצעצוע</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">מחיר:</label>
          <input defaultValue={TData.price} ref={priceRef} name="price" type="text" className="form-control" id="price" />
          {errors.price && <span className="text-danger">בבקשה הכנס מחיר</span>}
        </div>


        
        <div className="mb-3">
          <label htmlFor="category" className="form-label">קטגוריה</label>
          <select  ref={catRef} name="category" id="category" className="form-select" >
            {catForm_ar.map((item,i) => {
              return(
                <option selected={(TData.category == item)}
                key={i} value={item}>
                  {item}
                  </option>
                )
         
            })}
    
          </select>
        
          {errors.category && <span className="text-danger">בבקשה בחר קטגוריה</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">כתובת תמונה</label>
          <input defaultValue={TData.img}  ref={imgRef} name="img" type="text" className="form-control" id="img" />
        </div>
        <button type="submit" className="btn btn-primary">עדכן צעצוע</button>


      </form>
  
    </div>
  )
}

export default EditCTForm