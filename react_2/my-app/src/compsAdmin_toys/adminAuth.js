import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { doApiMethod, URL_API } from '../services/apiSer';

function AdminAuth(props){
  let history = useHistory()

  useEffect(()=> {
    if(!localStorage["tok"]){
      history.push("/admin");
    }
    doApi();
  },[])

  const doApi = async() => {
 
    let url = URL_API+"/users/checkAdmin";
    let data = await doApiMethod(url,"POST",{});
    if(data.auth != "success"){
      localStorage.removeItem("tok");
      history.push("/admin");

    }
  }

  return(
    <React.Fragment></React.Fragment> 
  )
}

export default AdminAuth