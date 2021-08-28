import Mov from "./movClass.js"

let movs_ar;

export const managerInit  = () => {
  let myUrl = "http://www.omdbapi.com/?s=black&apikey=5a292f28"
  doMangerApi(myUrl);
}

export const doMangerApi = (_url) => {
  fetch(_url)
  .then(resp => resp.json())
  .then(data => {
    console.log(data.Search);
    // נקרא לפונקציה רק כאן מכיוון
    // שרק שהטן השני מתבצע נקבל את המידע של הג'ייסון מהאיי פי איי
    // שביצענו לו בקשה
    createMovies(data.Search);
    // משווים את התוצאה למערך גלובלי כדי שנוכל לדבר איתו
    // גם בפונקציה של הסורט
    movs_ar = data.Search;
  })
  .catch(err => {
    alert("Something worng tray again later");
  })
}

// פונקציה שעושה שממיינת את הסרטים
export const sortMoviesBy = (_sortBy) =>{
  movs_ar = _.sortBy(movs_ar,_sortBy);
  createMovies(movs_ar);
}

const createMovies = (_ar) => {
  $("#id_row").empty();
  _ar.map(item => {
    let mov = new Mov("#id_row",item);
    mov.render()
  })
}