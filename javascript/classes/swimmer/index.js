
class Swimmer {
	swim() {
		console.log("I am swimming!")
        // --- Favour composition over inheritance
    }
}

class Whale {
  constructor(name, waterType) {
		this.name = name;
		this.waterType = waterType;
		this.swimmer = new Swimmer();
  }

	swim() {
		this.swimmer.swim();
	}
}

class Duck {
  constructor(name, waterType) {
		this.name = name;
		this.waterType = waterType;
		this.swimmer = new Swimmer();
  }

	swim() {
		this.swimmer.swim();
	}
}

const duck = new Duck("Crazy duck", true)
duck.swim()

// 1. Encapsulation
// 2. Abstraction - Tell, don't ask.
// 3. Inheritance
// 4. Polymorphism