export {};

/* Exclude<T, U> удаляет из T элементы которые мы указали в U  */
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "b" | "d">;
type T2 = Exclude<string | number | (() => void), Function>;

type Statuses = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericsStatus = Exclude<Statuses, string>;

type TextStatus = Exclude<Statuses, number>;

/* Extract<T, U> извлекает из T элементы которые мы указали в U  */
type T3 = Extract<"a" | "b" | "c", "a">;
type T4 = Extract<"a" | "b" | "c", "a" | "b" | "d">;
type T5 = Extract<string | number | (() => void), Function>;

type Persone = {
  firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

/* Извлекаем только свойстава где есть "name". Причем у нас нет fullName, но сигнатура все равно будет рабочая и выдаст
    "firstName" | "lastName"
*/
type PersoneNames = Extract<
  keyof Persone,
  "firstName" | "lastName" | "fullName"
>;

/* NonNullable<T> отбрасывает нулевые значения(null, undefined) */
type T6 = NonNullable<string | number | undefined>;
type T7 = NonNullable<string[] | null | undefined>;
