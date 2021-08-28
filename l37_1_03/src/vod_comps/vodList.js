import React from 'react';
import VodItem from './vodItem';

function VodList(props){
  return(
    <main className="container-fluid">
      <div className="container">
        <div className="row">
          {props.vod_ar.map(item => {
            return(
             <VodItem key={item.imdbID} item={item}/>
            )
          })}
        </div>
      </div>
    </main> 
  )
}

export default VodList

