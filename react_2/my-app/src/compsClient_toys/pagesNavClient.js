import React, { useEffect, useState } from 'react';
import { doApiGet, URL_API } from '../services/apiSer';
import {Link} from "react-router-dom";

function PageNavClient(props){
  let [pages,setPages] = useState(0)

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = URL_API+"/toys/TAmount";
    let data = await doApiGet(url);
    setPages(Math.ceil(data.count/5));
    
  }
 

    
  return(
    
    <div className="text-center text-light">

      <span className="text-info">Page</span>
      {[...Array(pages)].map((item,i) => {
       return(
         
       <Link key={i} to={"/list/"+i} className="btn btn-dark ms-1" >{i+1}</Link>
       
       )
      })}

</div>
  )
}

export default PageNavClient