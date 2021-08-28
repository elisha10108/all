import React from 'react';
import { useHistory } from 'react-router';

function ReturnList(props){
    let history = useHistory()



    const returnlist= ()=>{
        
        props.setCheck(1)
        // props.props.setCheck(1)
        history.push("/list");
        
      }
    return(
        <div>
            {props.check?"":<button onClick={() => { returnlist() }} className="ms-1 small my-2 "> לרשימה</button>}
                  

        </div> 
    )
}

export default ReturnList