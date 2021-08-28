window.onload = () => {
  init();
}

const init = () => {
  createCars();
}

const createCars  = () => {
  let car = new Car("body","opel","black");
  car.render();

  let truck = new Truck("body","volvo","silver","20T");
  truck.render();
  
}