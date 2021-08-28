import React from 'react';

function HeaderVod(props){
  return(
    <header style={{backgroundImage:"url(/images/cover.jpg)"}} className="container-fluid d-flex align-items-end text-center">
      <div className="container">
        <h1 className="display-2">Vod Home</h1>
      </div>
    </header> 
  )
}

export default HeaderVod