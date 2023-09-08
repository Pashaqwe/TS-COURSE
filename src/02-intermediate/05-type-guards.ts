type Fish = { swim: () => void };
type Bird = { fly: () => void };

/* Функция ниже это Type Guard(Защитник типов), 
    Запись типа function isFish(pet: Fish | Bird): boolean {} работать не будет
*/
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }

  return animal.fly();
}

/* Пример ошибки при создании Type Guard */

function isNull(val: any): val is null {
  return !val;
}

const empty = "";
const zero = 0;
if (isNull(empty)) {
  empty;
}
