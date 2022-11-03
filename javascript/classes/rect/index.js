class Rectangle {
  // private properties
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    this.#validatePositive(value);
    this.#width = value;
  }

  set height(value) {
    this.#validatePositive(value);
    this.#height = value;
  }

  #validatePositive(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("The value must be a positive number");
    }
  }
}