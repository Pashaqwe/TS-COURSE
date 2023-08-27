type Union1 = "a" | "b" | "c" | "d";

type Union2 = "a" | "e" | "c" | "i";

/* Если используем знак | то у нас будут все элементы, которые есть в Union1 и Union2(a,b,c,d,e,i)
   Если используем знак & то у нас будут только элементы, которые есть и в Union1 и Union2 (a, c)*/
type Union3 = Union1 | Union2; //a | b | c | d | e | i

type Union4 = Union1 & Union2; //a | c

/* С объектами работает не так, символ & объединит все поля объектов в один */
type Union5 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

const example: Union5 = {
  a: "a",
  b: "b",
  c: 1,
  t: true,
  z: null,
};

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Persone = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Persone;

export const employee1: Employee = {
  email: "zxc@mail.ru",
  login: "zxc",
  password: "123456",
  firstName: "asd",
  lastName: "qwe",
  contractStart: new Date(),
  phone: "89999999999",
  yearOfBirth: 1998,
};

type Developer = {
  skills: string[];
  phone: "string";
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
} & Employee;
