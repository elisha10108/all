import React, { useEffect, useRef, useState } from 'react';
import StudnetList from './studentList';

function AppStudentsLocal(props){
  let [student_ar,setStudentAr] = useState([])

  let nameRef = useRef();
  let scoreRef = useRef()
  
  const addNewStudent = () => {
    let studetObj = {
      name:nameRef.current.value,
      score:scoreRef.current.value
    }
    // like student_ar.push()
    setStudentAr([...student_ar,studetObj]);
    let arToString = JSON.stringify([...student_ar,studetObj]);
    localStorage.setItem("students",arToString)
  }

  useEffect(() => {
    if(localStorage["students"]){
      setStudentAr(JSON.parse(localStorage["students"]));
    }
  },[])

  const resetStudent = () => {
    setStudentAr([]);
    // מוריד את הקיי מהלוקאל סטורג'
    // לעומת קליר שהוא מוחק את כל המפתחות שקיימים בלוקאל
    localStorage.removeItem("students");
  }

  return(
    <div>
      <label>Student Name:</label>
      <input type="text" ref={nameRef}/>
      <br/>
      <label>Student Score:</label>
      <input type="number" defaultValue="70" ref={scoreRef}/>
      <br/>
      <br/>
      <button onClick={addNewStudent}>Add studnent</button>
      <button onClick={resetStudent}>Reset</button>
      <br />
      <StudnetList student_ar={student_ar}/>
    </div> 
  )
}

export default AppStudentsLocal