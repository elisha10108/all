import { useRef } from "react"
import { useHistory } from "react-router-dom";

function NavVod(props){
  // היסטורי מאפשר ידנית דרך ג'אווה סקריפט 
  // לשגר את עצמנו לעמוד אחר בלי לרפרש את הדפדפן
  let history = useHistory();
  let searchRef = useRef()
  let sortRef = useRef();

  const onSearchClick = () => {
    history.push("/");
    props.doApi(searchRef.current.value);
  }

  const onKeyboadClick = (e) => {
    if(e.code == "Enter"){
      onSearchClick()
    }
  }

  const onSelectSort = () => {
    props.sortBy(sortRef.current.value)
  }

  return(
    <nav className="container-fluid bg-warning">
    <div className="container p-3 ">
      <div className="row align-items-center">
        <div className="col-lg-6 row form">
          <div className="d-flex col-6">
            <input onKeyDown={onKeyboadClick} tabIndex="0"  ref={searchRef}  className="form-control" type="search" />
            <button onClick={onSearchClick} className="btn btn-info">Search</button>
          </div>
          <div className=" col-6">
            <select onChange={onSelectSort} ref={sortRef} className="form-select">
              <option value="">Sort By...</option>
              <option value="Title">Name</option>
              <option value="Year">Date</option>
            </select>
          </div>
        </div>
        <div className="nav col-lg-6 d-flex justify-content-end">
          <a href="#">Home</a>
          <a href="#">Action</a>
          <a href="#">Comedy</a>
        </div>
      </div>
    </div>
  </nav> 
  )
}

export default NavVod