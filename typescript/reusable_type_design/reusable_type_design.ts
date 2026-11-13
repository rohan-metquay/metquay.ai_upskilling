export{};

function fun<T>(a: T): T{
    return a;
}

function fun2<T>(a: T[]): T{
    return a[1];
}

function len<T extends {length: number}>(a: T, b: T): T{
    return a.length >= b.length ? a : b;
}

console.log(len("movie", "cinema"));
console.log(fun2([2,4,5]));

type emp = keyof user;
const is_rohan_active: emp = "isActive";
type name_type = user["name"];
let name: name_type = "Rohan R";
console.log(name, is_rohan_active);

function getProp<T, K extends keyof T>(a: T, b: K): T[K]{
    return a[b];
}

const u: user = {id: "U001", name: "eva", age:87};
console.log(getProp(u, "age"));

type changeToBoolean<T> = { [K in keyof T]: boolean};
type flags = changeToBoolean<user>;
const fg: flags = {id: true, name: true, age: false};
console.log(fg.age == fg.name);

type makeItPartial = Partial<user>;
const partialUser: makeItPartial = {name: "lana"};
console.log(partialUser.age);
console.log(partialUser.name);

type picky = Pick<user, "name" | "id">;
let pk: picky = {name: "ID1", id: "ID1"};
type omit = Omit<user, "id" | "name">;
let om: omit = {age: 29};