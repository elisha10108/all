import React, { useEffect, useState } from 'react';
import { doApiGet, doApiMethod, URL_API } from '../services/apiSer';
import AdminAuth from './adminAuth';
import { Link } from "react-router-dom";
import PageNav from './pagesNav';

function ToysList(props) {
  let [q_ar, setQar] = useState([]);

  useEffect(() => {
    doApi();
  }, [props.match.params])

  const doApi = async () => {
    let url = (!props.match.params.pageNum) ? URL_API + "/toys/?sort=_id&reverse=yes" : URL_API + "/toys/?sort=_id&reverse=yes&page=" + props.match.params.pageNum;
    let data = await doApiGet(url);
    console.log(data);
    setQar(data);
  }

  const deleteT = async (_id) => {
    if (window.confirm("are you sure you want to delete ?")) {
      let url = URL_API + "/toys/" + _id;
      let data = await doApiMethod(url, "DELETE", {});
      if (data.n == 1) {
        doApi();
      }
    }
  }


  return (
    <div className="container ">
      <AdminAuth />
      <h2 className="text-center text-light">כל הצעצועים</h2>
      <div className="text-center">
        <PageNav />
      </div>




      <div className="row col-12 mx-auto ">
      {q_ar.map((item, i) => {
        return (

          <div className="col-sm-6  col-md-4 col-7   ">
               <div>
        <div  className=" pt-3  toMidel">
                <div className="">
                  <img height="163px" width="220px" src={item.img} />
                </div>
                  <div  >
                <div style={{ width:"220px" }} className="text-center text-light  bg-secondary">
                  {/* <h6  className="w-100 bg-dark  ">{i + 1}</h6> */}
                  <div  >{item.category}</div>
                  <div  dir="rtl" >שם: {item.name}</div>
                  <div style={{whiteSpace:"normal"}} dir="rtl" >אודות: {item.info}</div>
                  <div  dir="rtl" >מחיר: {item.price}</div>

       

                </div>

              
             
              </div>
            
          <div ></div>

          </div>
          </div>
          </div>


        )
      })}
</div>






















     
        {/* {q_ar.map((item, i) => {
          return (

            <div className="row col-10 mx-auto">
              <div className="col p-2 " key={item._id}>
                <div className="  d-flex">
                  <div className="w-75  text-center text-light  bg-secondary">
                    <h6 className="w-100 bg-dark  ">{i + 1}</h6>
                    <div  >{item.category}</div>
                    <div  >שם: {item.name}</div>
                    <div  >אודות: {item.info}</div>
                  </div>
                  <div className="">
                    <img height="100px" width="150px" src={item.img} />
                  </div>

                </div>
              </div>
                 <div className="pt-2 ps-4 d-inline-block text-center pb-2">
                 <button onClick={() => { deleteT(item._id) }} className="btn btn-danger  ms-5">מחק</button>
                 <Link to={"/admin/edit/" + item._id} className="btn btn-dark ms-2">ערוך</Link>
             </div>

            </div>

          )
        })} */}


      <div className="text-center">
        <PageNav />
      </div>
    </div>
  )
}

export default ToysList