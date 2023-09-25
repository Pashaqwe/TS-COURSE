import { average } from "../01-basics/02-functions";

let str = "Hello world";
type X = typeof str;

type Fn = typeof average;

const max: Fn = (...num) => Math.max(...num);
max(1, 2, 3);

// Чтобы получить тип результата, используем утилиту ReturnType
type ReturnFn = ReturnType<typeof average>;
