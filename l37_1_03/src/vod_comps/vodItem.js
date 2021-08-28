import React from 'react';
import { Link } from 'react-router-dom';

function VodItem(props) {
  let item = props.item;
  return (
    <div className="col-lg-6 p-2">
      <div className="border overflow-hidden shadow rounded" >
        <img src={item.Poster} className="float-end ms-2 w-25" />
        <h2 className="p-2">{item.Title}</h2>
        <div className="p-2">Year: {item.Year}</div>
        <Link to={"/info/"+item.imdbID} className="ms-2 btn btn-dark">More info</Link>
      </div>
    </div>
  )
}

export default VodItem