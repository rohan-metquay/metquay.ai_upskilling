function infinite(){
    return infinite();
}

// infinite(); - will cause maximum callstack error

console.log("A");
setTimeout(() => { console.log("B")}, 0);
console.log("C");

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id > 0) resolve({id, name : "rohan"});
            else reject(new Error("ERROR"));
        }, 100)
    })
}

getUser(1).then(user => console.log(user.name))
    .catch(err => console.log(err.message))
    .finally(f => console.log("finally"));


async function showUser(id){
    const user = await getUser(id);
    console.log(user.name);
};

function wait(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet(){
    console.log("Greet start");
    await wait(2000);
    console.log("Greet end after 2 secs");
}

greet();
showUser(2);

const task = (name, ms, fail=false) => new Promise((resolve, reject) => {
    setTimeout(() => fail ? reject(new Error(`${name} failed`)) : resolve(`${name} done`), ms)
});

async function demo() {
  const results = await Promise.all([task("A", 300), task("B", 100)]);
  console.log(results);

//   try {
//     await Promise.all([task("A", 300), task("B", 100, true)]);  // here B fails
//   } catch (err) {
//     console.log(err.message);
//   }

  await Promise.allSettled([task("C", 200), task("R", 599, false), task("Z", 298, true)]);
  console.log("Promise All Settled");
};

demo()

async function microtask() {
console.log("B: inside, before await");
await null;
console.log("D: after await, which is a microtask");
}
console.log("A: start");
microtask();
console.log("C: end");
