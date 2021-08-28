import React  from 'react';
// ההערות בשבילך כדי שתביני סורי שרשמתי גיבריש פשוט עברית ואנגלית לא מתחברות יחד
function Select(props){

//  קראתי לפונקציה והעברתי לה את הערך מהסלקט
const handleChange=(event)=> {
// שמרתי את הבחירה בשביל שימוש "בעתיד" 
props.setval2(event.target.value)
// מוצא את המיקום של מה שנבחר בסלקט ומכניס אותו לתוך המשתנה שלי
let  var2Index = props.myAryy.findIndex((coin2) => {
  return coin2 === event.target.value
})
props.setvar2Index(var2Index)
  }


    return (
      <div>
      <form >
        <label>
          {/* בכל פעם שהור2אינדקס משתנה הקומפוננטה מתרנדרת בגלל ה יוזסטייט */}
          <select    onChange={(e)=>handleChange(e)} value = {props.myAryy[props.var2Index]}>
             {props.myAryy.map((item,i )=> {
                return  <option  key={i} value={item}>{item}</option>
              })}
              
          </select>
        </label>
        
      </form>
</div>
    );



}
  
    export default Select