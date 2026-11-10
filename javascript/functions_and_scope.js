const myName = "Rohan";
const surName = "Apz"
function fun1(){
    return `Hello ${myName}`;
}

console.log(fun1());

const fun2 = () => {
    return `Hi ${surName} :)`
}

console.log(fun2());

const fun3 = (a,b) => {
    return a+b;
}

console.log(fun3(2,919));

let level = "global";
function fun4(){
    level = "outer";
    const outerVar = "inside the outer function"
    console.log(`${level} : ${outerVar}`);
    
    if(fun3(2,3) == 5){
        level = "inner";
        const innerVar = "inside the inner function"
        console.log(`${level} : ${innerVar}`);
    }
}

fun4();

sayHi();
function sayHi() { console.log("Huii"); }

const user = {
    name: "Apz",
    greet() {
        return `Hi ${this.name} :)`
    }
};

console.log(user.greet());

const sum = (...arr) => {
    return arr.reduce((total,n) => total + n, 0);
}

console.log(sum(2,3,5,1,3,7,8));

const a = [1,2,3,4,5];
const b = [...a, 6,7,8,9,10];
const [e, f, ...g] = a;

console.log(b);
console.log(e);
console.log(f);
console.log(g);

