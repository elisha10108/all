import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { doApiGet, doApiMethod, URL_API } from '../../../services/apiSer';
import { Link, useHistory } from "react-router-dom";

function EditProd(props) {
  let history = useHistory()

  let editid = props.match.params.editId;
  const { register, handleSubmit, errors } = useForm();
  let nameRef = register({ required: true, minLength: 3 });
  let infoRef = register({ required: true, minLength: 3 });
  let priceRef = register({ required: true, min: 1 });
  let imgRef = register({});
  let qtyRef = register({ required: true, min: 1 });
  let commentsRef = register({ minLength: 1 });
  let category_s_idRef = register({ required: true });





  let [cat_ar, setcatAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = URL_API + "/categories";
    let data = await doApiGet(url);
    setcatAr(data);
  }


  const onFormSub = (dataBody) => {
    console.log(dataBody);
    
    editprod(dataBody)
  }

  const editprod = async(dataBody) => {
 
    let url = URL_API+"/prods/"+editid;
    let data = await doApiMethod(url,"PUT",dataBody);
    console.log(data);
    if(data.n == 1){
      alert("the prod updated");
 
      history.push("/admin/list");
    }
  }
  return (
    <div className="container ">

      <div className="container">
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>Add new Product</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">name</label>
          <input defaultValue="pizza" ref={nameRef} name="name" type="text" className="form-control" id="name" />
          {errors.name && <span className="text-danger">Enter vaild name (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="info" className="form-label">info</label>
          <input defaultValue="bla bla" ref={infoRef} name="info" type="text" className="form-control" id="info" />
          {errors.info && <span className="text-danger">Enter info (at least 2 charts)</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input defaultValue="5" ref={priceRef} name="price" type="text" className="form-control" id="price" />
          {errors.price && <span className="text-danger">Enter valid price higer than 0</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">img:</label>
          <input defaultValue="http://" ref={imgRef} name="img" type="text" className="form-control" id="img" />
          {errors.img && <span className="text-danger">Enter valid img higer than 0</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="qty" className="form-label">QTY:</label>
          <input defaultValue="4" ref={qtyRef} name="qty" type="number" className="form-control" id="qty" />
          {errors.qty && <span className="text-danger">Enter valid qty higer than 0</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Comments:</label>
          <input defaultValue="bla bla 222" ref={commentsRef} name="comments" type="text" className="form-control" id="comments" />
          {errors.comments && <span className="text-danger">Enter valid comments</span>}
        </div>
       
        <div className="mb-3">
          <label htmlFor="category_s_id" className="form-label">category_s_id:</label>
          <input defaultValue="bla bla 222" ref={category_s_idRef} name="category_s_id" type="number" className="form-control" id="category_s_id" />
          {errors.category_s_id && <span className="text-danger">Enter valid category_s_id</span>}
        </div>


        
   
    
        <button type="submit" className="btn btn-primary">edit that prod</button>


      </form>
  
    </div>
    </div>
  )
}

export default EditProd