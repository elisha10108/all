import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

function NavAdmin(props) {
  let history = useHistory();
  let {addToast} = useToasts()
  // בודק את המיקום שאתם נמצאים
  // ובנוסף כמו סטייט ברגע שהוא משתנה הוא מרנדר את הקומפנינטה
  // מחדש
  let location = useLocation();

  const logOut = () => {
    localStorage.removeItem("tok");
    history.push("/admin");
    addToast("You logged out from system",
    {
      appearance: 'warning',
      autoDismiss: true
    })
  }

  return (
    <nav className="container-fluid bg-dark text-white p-3">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="col">Trivia</h2>
          {(location.pathname.includes("/admin/")) ?
            <div className="col text-end">
              <Link to="/admin/list">List</Link>
              <Link to="/admin/add">New Question</Link>
              <Link to="#" onClick={logOut}>Log out</Link>
            </div> :
            <div className="col text-end">
              <Link to="/admin">Log in</Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavAdmin













//import React, { useState } from 'react';
// import { Link, useHistory } from "react-router-dom";


// function NavAdmin(props) {
//   let history = useHistory()
//   let [counter,setCounter] = useState(0)
//   const logOut = () => {
//     // גם מחק את הטוקן וגם שולח ללוגאין
//     localStorage.removeItem("tok");
//     history.push("/admin");
//     // משתמש בשביל לרנדר מחדש
//     setCounter(counter+1);
//   }



//   return (
//     <nav className="mb-3 container-fluid bg-dark text-white p-3">
//       <div className="container">
//         <div className="row align-items-center">
//           <h2 className="col">Koko trivia</h2>
//           <div className="col text-end">
//             {localStorage["tok"] ?
//               <React.Fragment>
//                 <Link to="/admin/list">List</Link>
//                 <Link to="/admin/add">New Question</Link>
//                 <Link to="#" onClick={logOut}>Log out</Link>
//               </React.Fragment>
//               : ""
//             }
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavAdmin