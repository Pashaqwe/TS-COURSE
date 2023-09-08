enum ShapeKind {
  Circle, //0
  Square, //1
}

const myShape = ShapeKind.Circle;

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

const circle1: Circle = {
  radius: 2,
  kind: ShapeKind.Circle,
};

const circle2: Circle = {
  radius: 2,
  kind: 0,
};
