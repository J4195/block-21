function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
 Car.prototype.getDescription = function () {
    console.log(this.model.getDescription());
    class Car extends ElectricCar {
        constructor (make, model, year, range) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.range = range;
    }
    ElectricCar.prototype.getDescription = function () {
        console.log('Make: ${this.model}, Year: ${this.year}, Range: ${this.range}');
 }
    }
}