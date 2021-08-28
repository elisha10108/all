import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { doApiMethod, URL_API } from '../services/apiSer';

function AdminAuth(props){
  let history = useHistory()

  useEffect(()=> {
    // בודק בכלל שיש טוקן אצל הצד לקוח
    if(!localStorage["tok"]){
      history.push("/admin");
    }
    doApi();
  },[])

  const doApi = async() => {
 
    let url = URL_API+"/users/checkAdmin";
    let data = await doApiMethod(url,"POST",{});
    if(data.auth != "success"){
      // אם לא מזהה שהמשתשמ הוא אדמין או שהטוקן לא תקין
      // משגר אותו ללוג אין בחזרה
      history.push("/admin");
      //TODO: show message
      // alert("go home!!!!! ")
    }
  }

  return(
    <React.Fragment></React.Fragment> 
  )
}

export default AdminAuth