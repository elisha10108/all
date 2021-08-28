import React from 'react';

function StudnetList(props){
  return(
    <ul>
      {props.student_ar.map(item => {
        return(
          <li>{item.name} , score: {item.score}</li>
        )
      })}
    </ul> 
  )
}

export default StudnetList