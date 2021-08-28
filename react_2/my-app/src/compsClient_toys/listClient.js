import React, { useEffect, useState } from 'react';
import PaymentForm from './card';

import { doApiGet, doApiMethodd, URL_API } from '../services/apiSer';
import { Link, useHistory } from "react-router-dom";
import PageNavClient from './pagesNavClient';
import SearchToy from './search';
import ShowList from './showList';
import CheckClient from './checkC';
import { useToasts } from 'react-toast-notifications';
import MyCards from './card';


function ToysListClient(props) {
  let [q_ar, setQar] = useState([]);
  let [check, setCheck] = useState(1)
  let [q_ar1, setQar1] = useState([]);
  let [c1, cetc1] = useState(0);
  let history = useHistory();
  let { addToast } = useToasts()

  useEffect(() => {
    doApi();
    doApiC();
    // console.log(q_ar)
  }, [props.match.params.pageNum, check, c1])

  const doApi = async () => {
    if (check) {
      let url = (!props.match.params.pageNum) ? URL_API + "/toys/?sort=_id&reverse=yes" : URL_API + "/toys/?sort=_id&reverse=yes&page=" + props.match.params.pageNum;
      let data = await doApiGet(url);
      // console.log(data);

      setQar(data);
    }
  }
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    addToast("You logged out from system",
      {
        appearance: 'warning',
        autoDismiss: true
      })
  }

  const doApiC = async () => {
    let url = URL_API + "/toys/myInfo/";
    let dataC = await doApiMethodd(url)
    setQar1(dataC.data);
    if (dataC.data.length) cetc1(1);
    else cetc1(0);
  }



  return (
    <div className="container s_screen">

      <CheckClient />
      <div className="  text-end d-block">
        {c1 ? <Link to="/myInfo" className="w-lg-25 btn  btn-success  ">לרשימה שלך</Link> : ""}



        <Link to="/addToys" className=" w-lg-25 btn btn-info mx-2">הוספה</Link>
        <Link to="#" onClick={logOut} className="w-lg-25 btn btn-danger   ">יציאה</Link>
        <h2 className="text-center text-light text-decoration-underline">רשימת כל צעצועים</h2>
      </div>

      <div className="justify-content-between">
        <div className="d-inline-block">
          <SearchToy setQar={setQar} setCheck={setCheck} check={check} />
        </div>
        <PageNavClient />
      </div>
<div className=" col-12 row">
      {q_ar.map((item, i) => {
        return (

          <div className="col-sm-5  col-md-4 col-lg-3 col-7  mx-auto toMidel pt-3" >
            <ShowList item={item} i={i} key={item.id} />

          </div>


        )
      })}
  {/* <PaymentForm/> */}
  <MyCards/>
</div>
      <div className="text-center">
        <PageNavClient />       </div>

    </div>
  )
}

export default ToysListClient