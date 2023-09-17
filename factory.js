class Factory {
    constructor(location, owner) {
      this.location = location;
      this.owner = owner;
      this.vehicles = [];
    }
  
    createVehicle(vehicle) {
      this.vehicles.push(vehicle);
    }
  
    listVehicles() {
      return this.vehicles;
    }
  
    paintVehicle(vin, paintColor) {
      const vehicleToPaint = this.vehicles.find(vehicle => vehicle.vin === vin);
      if (vehicleToPaint) {
        vehicleToPaint.paint(paintColor);
      } else {
        console.log(`Vehicle with VIN ${vin} not found.`);
      }
    }
  }
  export default Factory;
  
  