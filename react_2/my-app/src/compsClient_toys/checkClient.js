import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { doApiGet, doApiMethod, URL_API } from '../services/apiSer';
function clientAuth(props){
let history = useHistory()

useEffect(()=> {
  if(!localStorage["token"]){
    history.push("/loginClient");
  }
  doApi();
},[])

const doApi = async() => {
 
  let url = URL_API+"/users/checkClient";
  let data = await doApiGet(url);
  if(data.token != "good"){
    localStorage.removeItem("token");
    history.push("/");

  }
}



return(
  <React.Fragment></React.Fragment> 
)
}

export default clientAuth