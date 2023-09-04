type NestedNumbers = number | NestedNumbers[];

export const nums: NestedNumbers = [1, 2, 3, [1, 2, [12, 41, [31, 94]]]];

nums.push(1);
nums.push([1, 2]);
nums.push([1, 2, [12, 41]]);

// nums.push('1') Выдаст ошибку

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("hi");
isJSON(1);
isJSON({ a: 123, b: [123], c: { v: 1 } });
isJSON([1, { s: "ss" }]);
