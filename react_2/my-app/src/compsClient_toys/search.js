import React from 'react';
import { useForm } from 'react-hook-form';
import { doApiGet,  URL_API } from '../services/apiSer';
import ReturnList from './return';

function SearchToy(props) {

  const {register , handleSubmit,errors}=useForm()


  let searchRef = register({ required: true, minLength: 2 })

  const onFormSub = (dataBody) => {
    console.log(dataBody);
    doApi(dataBody)
  }
  const doApi = async (dataBody) => {
    let d = dataBody.search;
    let url = URL_API + '/toys/search/?q='+d;
    let data = await doApiGet(url);
    console.log(data);
    props.setQar(data)
    props.setCheck(0)
  }

  
  return (
    <div className="d-flex">
      <form onSubmit={handleSubmit(onFormSub)} >
      <div className=" mx-5  d-flex">
<div className="mx-5">
  <div className="d-flex">
          <input ref={searchRef} name="search" type="text" className="form-control w-50 mx-1" id="search" />
        <button type="submit" className="fa fa-search bg-gradient text-success bg-dark  rounded-circle border-start-0" aria-hidden="true"></button>
        </div>
        
</div>
<ReturnList setCheck={props.setCheck} check={props.check}/>
</div>
      </form>

    </div>
  )
}

export default SearchToy