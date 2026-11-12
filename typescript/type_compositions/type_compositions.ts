type id = string | number;
type user = {name: string, age: number};
type emp = {emp_id: number | string};
type rohan = user | emp;

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
