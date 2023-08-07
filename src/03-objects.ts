interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
  isNew: false,
  name: "X3",
};

const car2: Car = {
  brand: "BMW",
  type: "",
  wheels: 4,
};

car2["go"] = true;
