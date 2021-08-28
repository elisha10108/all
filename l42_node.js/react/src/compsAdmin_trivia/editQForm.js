import React, { useEffect, useState } from 'react';
import AdminAuth from './adminAuth';
import { useForm } from "react-hook-form";
import { doApiGet, doApiMethod, URL_API } from '../services/apiSer';
import { useHistory } from 'react-router';

function EditQForm(props) {
  let history = useHistory()
  // מכיל את הפרמטר שאספנו מהרואט יו אר אל
  let catForm_ar = ["general","js","countries","html","php"];
  let editid = props.match.params.editId;
  let [qData,setQData] = useState({})
  const { register, handleSubmit, errors } = useForm();
  let qRef = register({ required: true, minLength: 3 });
  let a1Ref = register({ required: true, minLength: 1 });
  let a2Ref = register({ required: true, minLength: 1 });
  let a3Ref = register({ required: true, minLength: 1 });
  let a4Ref = register({ required: true, minLength: 1 });
  let difRef = register({ required: true, min: 1, max: 10 });
  let catRef = register({ required: true });
  let imgRef = register();

  useEffect(() => {
    // יאסוף את המידע ההתחלתי על השאלה שנרצה לערוך
    getQDataFromApi()
  },[])

  const getQDataFromApi = async() => {
    let url = URL_API+"/trivia/single/"+editid;
    let data = await doApiGet(url);
    console.log(data);
    // בטופס עצמו לכל אינפוט וסלקט נשים דיפולט וואליו
    // עם הערך הנכון של אותו מאפיין שקשור לאינפוט
    setQData(data);
  }

  const onFormSub = (dataBody) => {
    //dataBody -> מכיל אובייקט עם המאפיינים לפי השמות של האינפוטים והסלקטים
    console.log(dataBody);
    
    doApi(dataBody)
  }

  const doApi = async(dataBody) => {
 
    let url = URL_API+"/trivia/"+editid
    let data = await doApiMethod(url,"PUT",dataBody);
    console.log(data);
    if(data.n == 1){
      alert("question updated");
      // מחזיר ליו אר אל שכתוב בסוגריים
      // window.location.href מקביל ל
      history.push("/admin/list");
    }
  }
  return (
    <div className="container">
      <AdminAuth />
      <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
        <h1>Edit question </h1>
        <div className="mb-3">
          <label htmlFor="q" className="form-label">The question:</label>
          <input defaultValue={qData.q} ref={qRef} name="q" type="text" className="form-control" id="q" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.q && <span className="text-danger">Please enter valid question</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a1" className="form-label">answer 1 (correct answer):</label>
          <input defaultValue={qData.a1} ref={a1Ref} name="a1" type="text" className="form-control" id="a1" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a1 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a2" className="form-label">answer 2:</label>
          <input defaultValue={qData.a2} ref={a2Ref} name="a2" type="text" className="form-control" id="a2" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a2 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a3" className="form-label">answer 3:</label>
          <input defaultValue={qData.a3} ref={a3Ref} name="a3" type="text" className="form-control" id="a3" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a3 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="a4" className="form-label">answer 4:</label>
          <input defaultValue={qData.a4} ref={a4Ref} name="a4" type="text" className="form-control" id="a4" />
          {/* האירור לפי השם של האינפוט מייצר לעצמו מאפיין אם יש שם טעות */}
          {errors.a4 && <span className="text-danger">Please enter answer</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="difficult" className="form-label">Difficult</label>
          <input defaultValue={qData.difficult} ref={difRef} name="difficult" type="number" className="form-control" id="difficult" />
          {errors.difficult && <span className="text-danger">Please enter number between 1 to 10</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
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
          {errors.category && <span className="text-danger">Please choose cateogry</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image url</label>
          <input defaultValue={qData.img}  ref={imgRef} name="img" type="text" className="form-control" id="img" />
        </div>
        <button type="submit" className="btn btn-primary">Update question</button>


      </form>
  
    </div>
  )
}

export default EditQForm