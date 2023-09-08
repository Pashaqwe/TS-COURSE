// Aliases(type)
// 1.primitives, unions, intersections
/* 2. Мы не можем расширять существующие типы, но можем создать новый 
type newWindow = Window & { a: "string" }; */

// Interfaces
/* 1. interface нужен, если мы хотим расширять существующий interface
interface Window {
  a: "string";
} */
// 2. Если мы пишем типы для classes, то мы используем interface
