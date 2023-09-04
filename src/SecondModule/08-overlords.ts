/* При такой записи получаем ошибку, поэтому нам нужно перегрузить функцию */
// function addWithError(a: string | number, b: string | number): string | number {
//   return a + b;
// }

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

// add(1, '') Будет ошибка, хотя мы и указали any

type asyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb) {
  const result = a + b;

  if (cb) {
    return cb(result);
  }

  return Promise.resolve(result);
}

asyncSum(1, 2);
