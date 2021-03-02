class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep'
    }
    toString() {
        return `The vehicle is ${this.make} ${this.model} from ${this.year}`
    }
}

const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

const mySecondCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!'
    }
}

const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(cap) {
        this.capacity = cap;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!'
        }
        if (this.vehicles.length === this.capacity) {
            return 'Sorry, we\ re full.'
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}

const garage = new Garage(2);