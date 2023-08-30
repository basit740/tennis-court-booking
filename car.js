class Car {
	constructor(modal, price, name) {
		this.name = name;
		this.modal = modal;
		this.price = price;
	}

	// methods

	ignite() {
		console.log(this.name + ' engine ignited! ');
	}
	brake() {
		console.log(this.name + ' brake: ');
	}
}

const firstCar = new Car(2023, 10000, 'Tesla');
const secondCar = new Car(2023, 15000, 'Suzuki');

firstCar.ignite();

secondCar.ignite();
secondCar.brake();
