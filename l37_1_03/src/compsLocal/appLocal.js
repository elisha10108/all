import React, { useEffect, useRef, useState } from 'react';
import AppStudentsLocal from './appStudentsLocal';

function AppLocal(props){
  let userRef = useRef()
  let [user,setUser] = useState("guest");

  const saveLocal = () => {
    setUser(userRef.current.value);
    localStorage.setItem("user",userRef.current.value);
  }


  useEffect( () => {
    if(localStorage["user"]){
      setUser(localStorage["user"])
    }
  },[])
  
  return(
    <div className="container">
      <AppStudentsLocal />
      <hr />
      <h1>Welcome {user} to our site</h1>
      <h2>Log in with another name</h2>
      <input type="text" ref={userRef} />
      <button onClick={saveLocal}>log in</button>
    </div> 
  )
}

export default AppLocal