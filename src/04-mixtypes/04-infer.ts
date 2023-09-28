function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value,
  };
}

// В FirsArg мы пытаемся получить тип аргумента pair из функции fromPair

// Некорректно прописаный тип
// type FirsArg<T> = T extends (first: First, ...args: any[]) => any
//   ? First
//   : never;

// infer определяет тип переданный в финкцию
type FirsArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

const myPair: FirsArg<typeof fromPair> = ["myKey", "myValue"];

fromPair(myPair);

// Тоже самое мы можем делать и с Классами

type ConstructorFirstArg<T> = T extends {
  new (first: infer myClass, ...arg: any[]): any;
}
  ? myClass
  : never;

class Computer {
  constructor(brand: string) {}
}

let brend: ConstructorFirstArg<typeof Computer> = "";

let dateArg: ConstructorFirstArg<typeof Date> = "";

export {};
