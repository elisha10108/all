import React from 'react';

function ProdBox(props) {
  let item = props.item;
  return (
    <div className="col-lg-3 p-2 text-center">
      <div className="p-2 shadow pb-4" style={{height:"100%"}}>
        <div className="prod_img" style={{ backgroundImage: `url(${item.img})` }}>

        </div>
        <h3>{item.name}</h3>
        <div>Price: {item.price} nis</div>
        <div>Info: {item.info.substr(0, 50)}</div>
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-success rounded-circle me-3">-</button>
          <span className="h4 mt-1"> 0 </span>
          <button className="btn btn-outline-success rounded-circle ms-3">+</button>
        </div>
      </div>
    </div>
  )
}

export default ProdBox