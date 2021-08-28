import React, { useEffect, useState } from 'react';
function ShowList(props){
let [sum,setsum]=useState(0);
let [summoney,setsummoney]=useState(0);

let paypal;

let item = props.item;
let price = item.price
let i= props.i;
useEffect(()=>{

  
},[summoney])
const minus=()=>{
  if (sum) {
    setsum(sum-1)
    setsummoney(summoney-item.price)

  }

}
const plus=()=>{

    setsum(sum+1)
    setsummoney((sum-1)*item.price)
}
    return(
      <div  key={item.id}>
          <div  >
                <div className="">
                  <img height="163px" width="220px" src={item.img} />
                </div>
                  <div  >
                <div style={{ width:"220px" }} className="text-center text-light  bg-secondary">
                  {/* <h6  className="w-100 bg-dark  ">{i + 1}</h6> */}
                  <div  >{item.category}</div>
                  <div  dir="rtl" >שם: {item.name}</div>
                  <div style={{whiteSpace:"normal"}} dir="rtl" >אודות: {item.info}</div>
                  <div  dir="rtl" >מחיר: {item.price}</div>

                  <div className="mx-auto d-flex mb-3 col-1">
                <i onClick={minus} className="fa fa-minus m-1 rounded" aria-hidden="true"></i>
                <div>{sum}</div>
                <i onClick={plus} className="fa fa-plus m-1" aria-hidden="true"></i>
                </div>


                </div>

              
             
              </div>
            
          <div >



          </div>
 
            </div>
</div>
    )
}


export default ShowList