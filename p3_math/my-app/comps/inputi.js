import React, { useEffect } from 'react';

function Inputi(props){

 
const handleChange=(event)=> {

props.setval2(event.target.value)

  }
  useEffect(() => {
console.log("k")
  }, [props.val2]);


    return (
      <div>
      <form >
        <label>
          
          <select  onChange={(e)=>handleChange(e)}>
             {props.val.map((item,i )=> {
                      return  <option  key={i} value={item}>{item}</option>
            })}
          </select>
        </label>
        
      </form>
</div>
    );



}
  
    export default Inputi