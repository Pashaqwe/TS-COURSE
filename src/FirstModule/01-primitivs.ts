// number
let x = 10;
// let y = 1234n;
let z = NaN;

// string
let str1 = "Hello world";
let symb = Symbol("as");
// let d = str1 + sumb;

// boolean
let o = true;
// o = 1

// nothing
let h = undefined;
let g: null = null;

// literal
const num = 108;
const str2 = "str2";

// universal
let mm: any = 1;
mm = "str3";
mm = [];
mm.toUpperCase();

let xx: unknown = 2;
if (typeof xx === "string") {
  xx.toUpperCase();
}
