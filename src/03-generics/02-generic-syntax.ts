// Array<string>     <string>-generic
// Promive<number>   <number>-generic

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

// Рекомендуется писать дженерики в одну букву н.р <T, U>

function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("ad", "ac");

// function head(value: string[]): string;
// function head(value: number[]): number;
// function head(value: boolean[]): boolean;
// function head(value: Date[]): Date;
// function head(value: any[]): any;
// readonly ставится для того, чтобы в момент реализации этой функции мы не могли мутировать value
function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}

head("asd");
head([3, 2]);
head([Date.now()]);

//Пример со стрелочными функциями
const arrowHead = <T>(value: T[]): T => value[0];

export interface ModelData<T> {
  title: string;
  value: T; // number [] boolean
}

const obj1: ModelData<number> = { title: "sss", value: 1 };
const obj2: ModelData<string> = { title: "sss", value: "aaa" };
const obj3: ModelData<Array<number>> = {
  title: "zzz",
  value: [3, 2, 1],
};
obj3.title = "aasd";
obj3.value = [1, 2, 3];
