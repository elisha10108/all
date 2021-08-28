import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { doApiMethodd, URL_API } from '../services/apiSer';

function CheckClient(props){

let history =useHistory()

useEffect(()=> {
    if(!localStorage["token"]){
      history.push("/");
    }
    doApi();
  },[])

  const doApi = async() => {
 
    let url = URL_API+"/users/checkClient";
    let data = await doApiMethodd(url,"POST",{});
    if(data.auth != "good"){
      localStorage.removeItem("token");
      history.push("/");

    }
  }



    return(
        <div></div> 
    )
}

export default CheckClient