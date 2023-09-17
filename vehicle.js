class Vehicle {
    constructor(make, model, year, price, vin) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.vin = vin;
      this.paintColor = undefined; // Default paint color is undefined
    }
  
    paint(paintColor) {
      this.paintColor = paintColor;
    }
  
    drive() {
      return `${this.year} ${this.make} ${this.model} drives`;
    }
  }
  export default Vehicle;
  
  
  
  