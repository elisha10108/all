// מייצר מחלקה שהולכת לירוש את המחלקה של הרכב
class Truck extends Car{
  constructor(_parent,_name,_color,_kg){
    // קורא לקונסטרקטור של המחלקה שירשנו
    super(_parent,_name,_color);
    this.kg = _kg;
  }

  // overwrite method
  render(){
    // הסופר מדבר עם הרנדר של המחלקה שירשנו
    super.render();
    // ואז אני מוסיף פקודות נוספות לרנדר המקורי
    this.newDiv.innerHTML += `
        <h3>Weight: ${this.kg}</h3>
      `
  }

  // renderKg(){
  //   this.newDiv.innerHTML += `
  //     <h3>Weight: ${this.kg}</h3>
  //   `
  // }
} 