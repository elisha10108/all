// פונקציה שמחזירה את מספר העמודים שאמור להיות בקולקשן לתצוגה
const numOfPagesInCollection = async(_url,perPage) => {
  try{
  let data = await doApi(_url); // מחזיר את כמות הרשומות
  // מחזירים כמות הרשומות חלקי מספר הרשומות בעמוד ומעגלים כלפי מעלה
    return Math.ceil(data.count / perPage); 
  }
  catch(err){
    console.log("err",err)
    alert("there problem , try again later")
  }
}
