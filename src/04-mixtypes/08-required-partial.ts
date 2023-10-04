export {};

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}

// Делает все поля readonly
type ReadOnlyTodo = Readonly<Todo>;

// Делает все поля необязательными
type PartialTodo = Partial<Todo>;

// Делает все поля обязательными

type RequiredTodo = Required<Todo>;
