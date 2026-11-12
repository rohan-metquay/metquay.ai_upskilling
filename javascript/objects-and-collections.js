const user = {
    surName: "apz",
    age: 20,
    greet(){
        console.log(`Hi ${this.surName}`);
    },
    "key with space": "Metquay"
};

user.greet();

const rohan = {
    firstName: "rohan"
}

Object.setPrototypeOf(rohan, user);

console.log(rohan.surName);

class MyClass{
    static name = "rohan"

    constructor(age, division){
        this.age = age;
        this.division = division;
    }

    greet(){
        console.log(`hello ${MyClass.name}`);
    }
}

const myObj = new MyClass();

console.log(MyClass.name);
myObj.greet();
// new MyClass().greet();

const arr = ["saw", "see", "suii"];
for(let i=0; i<arr.length; i++){
    console.log(arr[1]);
}

const orders = [
{ id: 1, item: "Book", price: 300, qty: 2, paid: true },
{ id: 2, item: "Pen", price: 20, qty: 10, paid: false },
{ id: 3, item: "Bag", price: 900, qty: 1, paid: true },
];

const sum = orders.reduce((sum, o) => sum + o.price * o.qty, 0);
const paidOrders = orders.filter(o => o.paid);
const totalPerOrder = orders.map(o => o.price * o.qty);

console.log(sum, paidOrders, totalPerOrder);

const myMap = new Map();
myMap.set("id", 1001);
myMap.set("name", "rohan");
console.log(myMap.get("id"));

const m = new Map(Object.entries({ a: 1, b: 2 }));
const o = Object.fromEntries(m);
console.log(m);
console.log(o);

const copyOfUser = {...user};
copyOfUser.greet();
// const deepCopyOfUser = structuredClone(copyOfUser);
// deepCopyOfUser.greet();  //throws an error

const order = {
customer: { name: "Apz", address: null },
items: [{ name: "Manu" }],
};

console.log(order.customer?.name);
console.log(order.items?.cost);

const settings = { volume: 0, title: "", good: false };
console.log(settings.volume || 50);
console.log(settings.volume ?? 50);
