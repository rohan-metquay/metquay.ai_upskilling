export {};

let myName: string = "rohan";
let count = 10;
const name = "apz";
let num: number = 30;
let active: boolean = true;
let id: symbol = Symbol("id");
let surname: string | null = null;
let undef: undefined = undefined;

function add(a: number, b: number): number{
    return a+b;
}

console.log(add(3,54));

function printUser(user: {name: string, age: number}){
    console.log(`My name is ${user.name} and my age is ${user.age}`);
}

printUser({name: "rohan", age: 28});

const scores: {[subject: string]: number} = {
    maths: 200,
    physics: 300
};

console.log(scores.maths);

const names: string[] = ["u", "f", "o"];
names.push("s");

const vals: Array<Number> = [1,2,5,10];
vals.push(361);

const udefs: readonly number[] = [7,5,2,7,90,18];
// udefs.push(86); //can't do push as it is readonly
let tup: [string, number] = ["Gems", 60];
const instrument: [make: string, model: string] = ["make", "model"];

const e: Employee = {name: "Sam", "age": 24, employee_id: "EMP001", date: new Date(), greet(){return "Hello"}};
console.log(e);

type rid = number | string;
type instrument = [make: string, model: number];
type emp_instrument = Employee | instrument;
const emp_instr: emp_instrument = {name: "Rohu", age: 39, employee_id: "EMP002", date: new Date(), greet(){return "Hello"}};
const emp_instr2: emp_instrument = ["Mityuto", 101];
console.log(emp_instr, emp_instr2);