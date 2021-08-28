import React, { useEffect, useState } from 'react';
import { doApiGet, URL_API } from '../../services/apiSer';
import ProdBox from './prodBox';

function HomeCatList(props){
  let [catName,setCatName] = useState("");
  let [prods_ar,setProdsAr] = useState([])

  useEffect(() => {
    doApi();
  },[])
  
  const doApi = async() => {
    // first get the category name by its id from props
    let url1 = URL_API+"/categories/single/"+props.catId;
    console.log(url1)
    let catInfo = await doApiGet(url1)
    setCatName(catInfo.name)
    // second: get the list of prods of the same category
    let url = URL_API+"/prods/?cat="+props.catId;
    console.log(url)
    let prodsData = await doApiGet(url);
    console.log(prodsData)
    setProdsAr(prodsData);
  }

  return(
    <React.Fragment>
        <hr className="for_h2"/>
          <h2 className="h2_hr">
            <span>
            {catName}
            </span>
          </h2>
          <div className="row mb-5">
            {prods_ar.map(item => {
              return(
                <ProdBox key={item._id} item={item} />
              )
            })}
          </div>
    </React.Fragment> 
  )
}

export default HomeCatList