import React, { useEffect, useState } from 'react';
import {  doApiMethodd, URL_API } from '../services/apiSer';
import { Link, useHistory } from "react-router-dom";
import CheckClient from './checkC';

function MyInfo(props) {

  
  let [q_ar, setQar] = useState([]);
  let history = useHistory();
  useEffect(() => {
    doApi();
  }, [props.match.params])

  const doApi = async () => {
    let url = (!props.match.params.pageNum) ? URL_API + "/toys/myInfo/?sort=_id&reverse=yes" : URL_API + "/toys/myInfo/?sort=_id&reverse=yes&page=" + props.match.params.pageNum;
    let data = await doApiMethodd(url)
    console.log(data);
    setQar(data.data);
  }

  const deleteT = async (_id) => {
    if (window.confirm("are you sure you want to delete ?")) {
      let url = URL_API + "/toys/delete/" + _id;
      let data = await doApiMethodd(url, "DELETE", {});
      console.log(data)
      if (data.n == 1) {
        history.push("/list/myInfo");

      }
    }
  }




  return (
    <div className="container s_screen">
      <CheckClient />
      <h2 className="text-center text-light text-decoration-underline"> הצעצועים שלך</h2>
      <Link to="/list" style={{width:"150px"}} className=" btn btn-warning d-block mx-auto">חזרה לרשימה </Link>
<div className=" col-12 row">
      {q_ar.map((item, i) => {
        return (
          <div key={item._id}  className="col-sm-5  col-md-4 col-lg-3 col-7  mx-auto toMidel pt-3">
          <div  >
                <div>
                <img height="163px" width="200px" src={item.img} />

                </div>
            <div >
              <div>
                <div style={{ width:"200px" }} className=" text-center text-light  bg-secondary">
                  <h6 className=" bg-dark  ">{i + 1}</h6>
                  <div  dir="rtl">{item.category}</div>
                  <div  dir="rtl">שם: {item.name}</div>
                  <div  style={{whiteSpace:"normal"}} dir="rtl" >אודות: {item.info}</div>
              <div className="p-2   text-center">
                <button onClick={() => { deleteT(item._id) }} className="btn btn-danger m-1">מחק</button>
                <Link to={"/edit/" + item._id} className="btn btn-dark ">ערוך</Link>
              </div>
                </div>
              </div>
            </div>


          </div>
          </div>
        )
      })}
          </div>



    </div>
  )
}

export default MyInfo