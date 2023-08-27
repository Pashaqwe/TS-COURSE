type MyBoolean = true | false;

type Pair = [string, string];
type Pairs = Pair[];

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  // Конструкиця ниже используется когда мы не знаем сколько еще полей будет и какого типа они будут(unknown)
  [key: string]: unknown;
};
