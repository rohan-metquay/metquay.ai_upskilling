const myname = "rohan";

if(true){
    var a = 1;
    let b = 1;
    const c = 3;
}
let b;
let c = null;

console.log(a);
console.log(b);
console.log(c);
console.log(9 == "9");
console.log(9 === "9");
console.log(`Hello ${myname}`);
console.log(null == undefined);

const p1 = { score: 10 };
const p2 = p1;
p2.score = 20;
console.log(p1.score); 

check = "Hello";
if(!check){
    console.log("name is required");
}

const qty = "3";
console.log(qty + 2);
console.log(Number(qty) + 2);

let value = 42;
console.log(typeof value);
value = "forty-two";
console.log(typeof value);