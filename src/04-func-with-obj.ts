function printPoint(point: { x: string; y: string }): void {
  console.log(`Координаты по x:${point.x}, по y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};

printPoint(obj1);

const obj2 = {
  x: "1",
  y: "2",
  z: "3",
};

// Ошибки не будет, т.к функиця просит минимум x и y(z не дает ошибки), но если убрать y ошибка появится
printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(user.firstName.toUpperCase());

  if (user.lastName) {
    console.log(user.lastName.toUpperCase());
  }
}

printName({ firstName: "Pasha" });
printName({ firstName: "Pasha", lastName: "ABS" });
