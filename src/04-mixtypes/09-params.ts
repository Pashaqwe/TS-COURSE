export {};

function f1(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

// Получим тип того, что возвращает функция
type T0 = ReturnType<typeof f1>;

// Получим тип параметров функции
type T1 = Parameters<typeof f1>;

/* Для классов есть отдельные типы, для примера один ниже */
type T2 = ConstructorParameters<ErrorConstructor>;

class Car {
  constructor(brader: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>;
