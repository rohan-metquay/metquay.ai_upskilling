export {};

type id = string | number;
type user = {name: string, age: number};
type emp = {emp_id: number | string};
type rohan = user & emp;

const fun = (id: id) => {
    console.log(`My id is ${id}`);
}

fun(100);
fun("EMP001");

const jimmy1: rohan = {emp_id: "EMP01", name:"JIMMY", age: 86};
const jimmy2: rohan = {emp_id: 101, name:"JIMMY", age: 86};

console.log(jimmy1, jimmy2);

type httpmethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type vowels = "A" | "E" | "I" | "O" | "U";
const config = { mode: "dark", size: 12 } as const; //as const makes it readonly

function req(url: string, method: httpmethod){
    if(url == null) return "URL is empty"
    if(typeof url === "string") url.trim();
    console.log(`This function sends a ${method} request to ${url}`);
}

req("www.google.com", "GET");

type shape = {kind: "circle", radius: 2|5|9} | {kind: "square", edge: 4|5|9};
const sc: shape = {kind: "circle", radius: 2};
const ss : shape = {kind: "square", edge: 9};
const pi = 3.14159;

function area(s: shape): number{
    switch(s.kind){
        case "circle": return pi*s.radius*s.radius;
        case "square": return 4*s.edge;
    }
}

console.log(area(ss));
console.log(area(sc));

interface Cat { meow(): void }
interface Dog { bark(): void }

function isCat(pet: Cat | Dog): pet is Cat {
 return (pet as Cat).meow !== undefined;
}

const cat: Cat = {
    meow(){
        console.log("Meowww!!");
    }
}

const dog: Dog = {
    bark(){
        console.log("bark!!!")
    }
}

console.log(isCat(cat));

const values = [1, null, 2, undefined, 3, "sss"];
const nums = values.filter((v): v is number => v != null);
console.log(nums);

let unk : any = JSON.parse('{ "x" : 1, "y : 2');
let un: unknown = JSON.parse('{"x" : 44, "y" : 32');

// function fail(msg: string): never {   // compilation fails because it does not have a reachable endpoint
//  console.log("Hello");
// }

function nev(msg: string): never{
    throw new Error(msg);
}

// let nev: never = "01"; //it can be declared, but value is never read