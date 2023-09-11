/* keyof по сути достает ключи(или в некоторых случаях значения) того, что мы укажем в типе */

type WindowProp = keyof Window;

const myValue: WindowProp = "ontoggle";

interface PC {
  brand: string;
  year: string;
}

type Type1 = keyof PC; // brand | year

const val1: Type1 = "brand";
const val2: Type1 = "year";

type Tup1 = keyof [string, number];

const val3: Tup1 = "0"; // index
