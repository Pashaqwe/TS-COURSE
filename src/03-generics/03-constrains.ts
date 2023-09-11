/* С помощью extends мы можем минимально описать что требуется от дженерика т.к иногда передавать в дженерик 
 пережавать любой парраметр нельзя(пример ниже). Не у всего есть свойстров  length и поэтому нам нужно описать, что мы 
 можем принимать дженерики только есть у T есть свойсто length*/

function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("ss");
len([1, 2]);
len({ length: 12 });
// len(1)
// len(true)