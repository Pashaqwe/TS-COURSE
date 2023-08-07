function sum(a: number, b: number): number {
  return a + b;
}
const sum2 = (a: number, b: number) => a + b;
const sum3 = function sum(a: number, b: number): number {
  return a + b;
};

function log(name: string, userId?: string): void {
  console.log("Hello", name, "with ID" || "anonym");
}

log("Pasha");
log("Pasha", "123");

// Если функция не завершится, то передаем тип never(в данном случае сломается выкинет ошибку)
function crash(): never {
  throw new Error("crash");
}

// Пример, когда мы не знаем сколько параметров передается в функцию
function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}
