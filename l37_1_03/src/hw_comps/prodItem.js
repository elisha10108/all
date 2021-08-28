import React from 'react';

function ProdItem(props) {
  let item = props.item;
  return (
    <div className="col-lg-4 border p-2">
      <img src={item.image} className="float-start me-2 w-25" />
      <div className="badge bg-info float-end">{item.cat}</div>
      <h2>{item.name}</h2>
      <div>Price: {Number(item.price).toFixed(2)}</div>
    </div>
  )
}

export default ProdItem

// 10:50