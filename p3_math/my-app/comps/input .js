import React, { useEffect }  from 'react';

function Input(props){

 
const handleChange=(event)=> {

props._setval1(event.target.value)

  }
const wantTochange=(e)=>{
    props.setvalue(e.target.value)
}
useEffect(() => {
    console.log("k")

}, [props.val1]);


    return (
      <div>
      <form >
        <label>
        
          <select  onClickCapture={(e)=>handleChange(e)}>
             {props._val.map((item,i )=> {
                      return  <option  key={i} value={item}>{item}</option>
            })}
          </select>
        </label>
        <input type="number" onInput={wantTochange} />
      </form>
</div>
    );



}
  
    export default Input