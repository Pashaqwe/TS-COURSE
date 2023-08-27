interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

/* В тайпскрипте если мы используем одно и тоже имя, то мы не переписываем интерфейс, а расширяем его
полезно при работе с внешним кодом н.р библиотеками */
interface User {
  isOnline?: boolean;
}

const user1: User = {
  email: "zxc@mail.ru",
  login: "zxc",
  password: "123456",
  isOnline: true,
};

/* Ниже для примера мы расширяем interface объекта window */
// interface Window {
//   isAuth?: boolean;
// }

// window.isAuth = true;

interface Persone {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

/* Объединение типов(наследование) */

interface Employee extends User, Persone {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
  /* При расширении, мы можем изменить поля которые были в родительском phone был необязательный, а ниже сделаем обязательным
  но другой тип(н.р number) мы передать не можем */
  //   phone: number; Ошибка
  phone: "string";
  level?: "junior" | "middle" | "senior";
  /* Ниже описываются методы, это одно и тоже, просто разный синтаксис */
  say(): void;
  code?: (arg: string) => void;
}

export const employee1: Employee = {
  email: "zxc@mail.ru",
  login: "zxc",
  password: "123456",
  isOnline: true,
  firstName: "asd",
  lastName: "qwe",
  contractStart: new Date(),
  phone: "89999999999",
  yearOfBirth: 1998,
};

// class MyDeveloper implements Developer {
//   code: () => void;
//   say(): void {
//     throw new Error("Method not implemented.");
//   }
//   skills: string[];
//   phone: "string";
//   level?: "junior" | "middle" | "senior" | undefined;
//   contractStart: Date;
//   email: string;
//   login: string;
//   password: string;
//   isOnline?: boolean | undefined;
//   firstName: string;
//   lastName: string;
//   yearOfBirth?: number | undefined;
// }
