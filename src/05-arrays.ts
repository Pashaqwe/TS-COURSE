const numbers = [1, 2, 3, 4];

const strs: string[] = [];
const strs2: Array<string> = [];
strs.push("asd");

const cars: Car[] = [];
cars.push({ brand: "Audi", wheels: 3, type: "" });

const arrOfArr: string[][] = [];
arrOfArr.push(["aaa", "sss"]);

function printArr(arr: unknown[]) {
  arr.forEach((el, index, array) => {
    console.log(el, index);
  });
}
