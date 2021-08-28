import React, { useEffect, useState } from 'react';
import { doApiGet, URL_API } from '../services/apiSer';
import AdminAuth from './adminAuth';

function QuestionList(props){
  let [q_ar,setQar] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = URL_API+"/trivia";
    let data = await doApiGet(url);
    console.log(data);
    setQar(data);
  }


  return(
    <div className="container">
      <AdminAuth />
      <h2>List of questions:</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answers</th>
            <th>Difficult</th>
            <th>Category</th>
            <th>Date</th>
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
              </tr>
            )
          })}
        </tbody>
      </table>
    </div> 
  )
}

export default QuestionList