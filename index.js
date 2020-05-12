const l = require("lodash");

let val = { name: "john", class: 5 };
let val2 = { ...val };
val2.name = "tom";
console.log(val2);

let val3 = val;
val.name = "antonio";
console.log(val3);

const component = { theme: "dark", data: { type: "text" } };
const type = l.get(component, "data", "no any value");
// const type = l.get(component, "type", "no any value");
console.log("type", type);

let a = { id: 1, department: "cse", marks: 10 };
let b = { id: 2, batch: "A1", marks: 12 };

let result = l.assign(a, { name: "xyz" }, b);
console.log(result);

let student = [
  { id: 1, department: "cse", marks: 10 },
  { id: 2, batch: "A1", marks: 12 },
];
let result2 = l.find(student, (std) => std.marks > 5);
console.log("result2", result2);

l.set(a, "mentor", "tom");
// l.set(a, "name", "tom");

console.log("a after set", a);

let v = {
  name: "deep",
  class: 7,
  department: { name: "science", dep_id: "2" },
};
let v1 = { ...v };
console.log("v1", v1);
let v2 = l.cloneDeep(v);

v2.name = "abc";
console.log("v2", v2);
console.log("v", v);

const { Map } = require("immutable");
const Val = Map({ name: "UT", age: 20 });
const Val2 = Val.set("age", 21);
console.log(Val.get("age") + " and " + Val2.get("age"));

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
console.log(map1.equals(map2));
console.log(map1 === map2);

const d = Map({ x: 1, y: 4 });
const d2 = d.set("x", 1);
// const d2 = d.set("x", 5);
console.log(d === d2);
