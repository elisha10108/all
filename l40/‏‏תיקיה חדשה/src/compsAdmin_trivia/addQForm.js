import React from 'react';
import AdminAuth from './adminAuth';
import { useForm } from "react-hook-form";
import { doApiMethod, URL_API } from '../services/apiSer';
import { useHistory } from 'react-router';
import { useToasts} from "react-toast-notifications"

function AddQForm(props) {
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  let {addToast} = useToasts()
  
  let qRef = register({ required: true, minLength: 3 });
  let a1Ref = register({ required: true, minLength: 1 });
  let a2Ref = register({ required: true, minLength: 1 });
  let a3Ref = register({ required: true, minLength: 1 });
  let a4Ref = register({ required: true, minLength: 1 });
  let difRef = register({ required: true, min: 1, max: 10 });
  let catRef = register({ required: true });
  let imgRef = register();

  const onFormSub = (dataBody) => {
    //dataBody -> מכיל אובייקט עם המאפיינים לפי השמות של האינפוטים והסלקטים
    console.log(dataBody);
    
    doApi(dataBody)
  }

  const doApi = async(dataBody) => {
    if(dataBody.img.length == 0){
      // ימחוק מאפיין אימג מהאובייקט
     // delete dataBody.img
    }
    let url = URL_API+"/trivia"
    let data = await doApiMethod(url,"POST",dataBody);
    console.log(data);
    if(data._id){
      // alert("question added");
      addToast("Question added",
      {
        appearance: 'info',
        autoDismiss: true
      })
      history.push("/admin/list");
    }
  }
  return (
    <div className="container">
      <AdminAuth />
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>Add new question to system</h1>
        <div className="mb-3">
          <label htmlFor="q" className="form-label">The question:</label>
          <input ref={qRef} name="q" type="text" className="form-control" id="q" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.q && <span className="text-danger">Please enter valid question</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a1" className="form-label">answer 1 (correct answer):</label>
          <input ref={a1Ref} name="a1" type="text" className="form-control" id="a1" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a1 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a2" className="form-label">answer 2:</label>
          <input ref={a2Ref} name="a2" type="text" className="form-control" id="a2" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a2 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a3" className="form-label">answer 3:</label>
          <input ref={a3Ref} name="a3" type="text" className="form-control" id="a3" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a3 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a4" className="form-label">answer 4:</label>
          <input ref={a4Ref} name="a4" type="text" className="form-control" id="a4" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a4 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="difficult" className="form-label">Difficult</label>
          <input ref={difRef} name="difficult" type="number" className="form-control" id="difficult" />
          {errors.difficult && <span className="text-danger">Please enter number between 1 to 10</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select ref={catRef} name="category" id="category" className="form-select" >
            <option value="general">general</option>
            <option value="js">js</option>
            <option value="countries">countries</option>
            <option value="html">html</option>
          </select>
          {errors.category && <span className="text-danger">Please choose cateogry</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image url</label>
          <input ref={imgRef} name="img" type="text" className="form-control" id="img" />
        </div>
        <button type="submit" className="btn btn-primary">Add new question</button>


      </form>
 
    </div>
  )
}

export default AddQForm