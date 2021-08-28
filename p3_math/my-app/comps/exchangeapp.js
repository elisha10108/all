import React, { useEffect, useState } from 'react';
import Input from './input ';
import Inputi from './inputi';

// import Score from './score';

function EXCHANGEAPP(props) {
    let [value, setvalue] = useState(1);
    let [sum, setsum] = useState(1);


    let [_val, _setval] = useState(["ILS","USD",  "EUR", "BTC", "THB"]);
    let [val1, _setval1] = useState("ILS");


    let [val, setval] = useState(["USD", "ILS", "EUR", "BTC", "THB"]);
    let [val2, setval2] = useState("USD");

    useEffect(() => {

        doapi();
    }, [val1, val2, value]);


    const doapi = async () => {
        let url1 = "http://apilayer.net/api/live?access_key=27557e5d5e5adab1929a4c284272c032&currencies=" + val1;
        let resp1 = await fetch(url1);
        let data1 = await resp1.json();
        let infoUrl1 = data1.quotes[Object.keys(data1.quotes)[0]];


        let url2 = "http://apilayer.net/api/live?access_key=27557e5d5e5adab1929a4c284272c032&currencies=" + val2;
        let resp2 = await fetch(url2)
        let data2 = await resp2.json()
        let infoUrl2 = data2.quotes[Object.keys(data2.quotes)[0]];


        console.log(infoUrl1)
        console.log("---")
        console.log(infoUrl2)
        console.log("-------")
  

        if ( infoUrl2>infoUrl1 ) {
            setsum ( ( infoUrl2 /infoUrl1 )*value) ;
        } else {
            setsum(( infoUrl2 / infoUrl1)*value) ;

        }

    }
    const onchang=()=>{
        let temp;
        temp = val1;
        _setval1(val2);
        setval2(temp);

    }


    return (
   
       
        <div className=" p-2 skin " >
            <Input _val={_val} val1={val1}  _setval1={_setval1} setvalue={setvalue} />
            
            <Inputi val2={val2} val={val}  setval2={setval2} />
            <button onClick={onchang}/>

            <div >the sum is: <div className="border w-25 mx-auto">{sum.toFixed(4)}</div> 
                </div>
            
        </div>
       
    )
}

export default EXCHANGEAPP