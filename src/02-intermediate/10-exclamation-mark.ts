let word: string | null = null;
export const num = 10;

if (num > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Persone {
  name: string;
  age: number;
}

function printName2(persone?: Persone) {
  console.log(persone!.name);
}

/* Использованеи этого символа не приветствуется  */
