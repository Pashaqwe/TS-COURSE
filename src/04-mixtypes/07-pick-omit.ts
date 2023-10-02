export {};

type WellKnownBrands =
  | "apple"
  | "lenoveo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

/* Record<T, U> Позволяет нам создавать тип объектов где T - тип ключей, U - тип значений  */
type Names = Record<string, number>;
type BrendNames = Record<WellKnownBrands, string>;

const myBrands: BrendNames = {
  apple: "",
};

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

/* Pick<T, U> Выбирает из объектной структуры T поля, которые мы указали в U */
type SimpleTodo = Pick<Todo, "id" | "title" | "completed">;

const SinpleTodo: SimpleTodo = {
  id: "asd",
  completed: false,
  title: "Hello",
};

/* Omit<T, U> Исключает из объектной структуры T поля, которые мы указали в U */
type SimpleTodo2 = Omit<Todo, "id" | "title" | "completed">;
