function example(x?: number | string) {
  if (typeof x === "string") {
    x.toLowerCase();
  } else if (typeof x === "number") {
    x.toFixed();
  } else if (x === undefined) {
    console.log("no value");
  } else {
    x;
  }
}

function example2(strs: string | string[] | null) {
  /* Строка ниже не отработает так, как мы ожидаем, т.к массив это объект, но и null тоже объект */
  //   if (typeof strs === "object") {
  //   }

  /*  Чтобы это обойти, то нам нужно применить хак, который используется в офф.доке 
      Ниже TS сам поймет, что мы имели ввиду массив.
      Так же для провери мы можем использовать записть:
      if(Array.isArray(strs)) {}
  */
  if (strs && typeof strs === "object") {
    strs.concat([]);
  } else if (typeof strs === "string") {
    strs.toLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getMonth();
  } else {
    x.concat();
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}
