import React, { useEffect, useState } from 'react';
import { doApiGet, doApiMethod, URL_API } from '../services/apiSer';
import AdminAuth from './adminAuth';
import {Link} from "react-router-dom";
import PageNav from './pagesNav';

function QuestionList(props){
  let [q_ar,setQar] = useState([]);

  useEffect(() => {
    doApi();
  },[props.match.params])

  const doApi = async() => {
    let url = (!props.match.params.pageNum) ? URL_API+"/trivia/?sort=_id&reverse=yes" : URL_API+"/trivia/?sort=_id&reverse=yes&page="+props.match.params.pageNum;
    let data = await doApiGet(url);
    console.log(data);
    setQar(data);
  }

  const deleteQ = async(_id) => {
    if(window.confirm("are you sure you want to delete ?")){
      let url = URL_API + "/trivia/"+_id;
      let data = await doApiMethod(url,"DELETE",{});
      if(data.n == 1){
        doApi();
      }
    }
  }

// 13:10
// TODO: Delete , edit V
// Pagenation V
// Log out / log in V
// toaste message
// 14:50 
  return(
    <div className="container">
      <AdminAuth />
      <h2>List of questions:</h2>
      <PageNav />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answers</th>
            <th>Difficult</th>
            <th>Category</th>
            <th>Date</th>
            <th>delete/edit</th>
          </tr>
        </thead>
        <tbody>
          {q_ar.map((item,i) => {
            return(
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.q}</td>
                <td>{item.a1},{item.a2},{item.a3},{item.a4}</td>
                <td>{item.difficult}</td>
                <td>{item.category}</td>
                <td>{item.date_created}</td>
                <td>
                  <button onClick={() => {deleteQ(item._id)}} className="btn btn-danger">del</button>
                  <Link to={"/admin/edit/"+item._id} className="btn btn-dark ms-2">edit</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <PageNav />
    </div> 
  )
}

export default QuestionList