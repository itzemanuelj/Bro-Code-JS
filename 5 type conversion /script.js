///type conversion
let age = prompt("enter age");

age = Number(age);

age += 1;
console.log(`you are ${age} years old`);

console.log(typeof age);

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean(true);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/// 3.14 number
/// 3.14 string
/// true boolean
