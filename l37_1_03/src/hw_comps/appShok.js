import React, { useEffect, useState } from 'react';
import ProdItem from './prodItem';

function AppShok(props){
  let [prods_ar,setProdsAr] = useState([]);
  // סתם לדוגמא
  let [user,setUser] = useState("koko akof 888");

  // [] -> מערך ריק מייצג את הלייף סייקל שנקרא
  // componentDidMount()
  useEffect(() => {
    // קוראים לפונקציה כדי שנוכל להשתמש באסינק הוויאט
    doApi()
  },[])

  const doApi = async() => {
    let url = "http://fs1.co.il/bus/shop.php";
    try{
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    setProdsAr(data);
    }
    catch(err){
      console.log(err);
      alert("Come back later, something go worng!!!")
    }
  }

  return(
    <div className="container">
      <h1>Monkeys shok:</h1>
      <div className="row">
        {prods_ar.map(item => {
          return(
           <ProdItem key={item.id} item={item} />
          )
        })}
      </div>
    </div> 
  )
}

export default AppShok