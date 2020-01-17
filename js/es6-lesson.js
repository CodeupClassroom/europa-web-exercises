// old way
// console.log(Math.pow(2, 8)) // === 256
// new syntax
// for (let i = 0; i<16;i++)
//     console.log(2 ** i) // === 256

// example showing how var hoisting acts differently and may hide programming problem
function explore(){
    console.log(a);
    // console.log(b);
    // console.log(c);
    var a = 1;
    let b = 2;
    const c = 3;
}
explore();

// with block scope
{
    var varSecret = "var";
    let letSecret = "let";
    const constSecret = "const";
}
console.log(varSecret);  // works with var
// console.log(letSecret);
// console.log(constSecret);

for (let i = 0; i < 10; i++) {
    // ...
}
// console.log(i); // undefined

const fruits = ["apple", "orange", "banana", "pineapple", "kiwi"];
fruits.push("mango");
fruits[0] = "lemon";

// for (let i = 0; i<fruits.length;i++) {}
for (let fruit of fruits) {
    console.log(fruit);
}

let dog = {
    name:"dog",
    age: 2,
    breed:"chihuahua"
}
console.log("Our " + dog.breed + " is named " + dog.name + ".");
document.getElementById("message").innerHTML = `<p>Our ${dog.breed} is named ${dog.name}.</p>
        <p>He's a good dog!</p>`;

const ourFunction = function(name) {
    console.log(`Hello ${name}!`);
}
ourFunction("Europa");

const newFunction = name => {
    console.log(`Hello ${name}!`);
}
newFunction("Europa");

const addSeven = function (num) {
    return num + 7;
}
const add7 = num => num + 7;

console.log(addSeven(14));
console.log(add7(14));

function sayHello(name) {
    if (name) {
        return "Hello, " + name + "!";
    }
    else
        return "Hello, Codeup!";
}

console.log(sayHello("Europa"));
console.log(sayHello());

const newHello = (name = "Codeup") => `Hello, ${name}!`;
console.log(newHello("Europa"));
console.log(newHello());
//default params are like saying
//let name;
//if (!name) name = defaultVal

const friend = {
    name: "Calvin",
    age:7
}
const friend2 = {
    name: "Suzie"
}
const tellMeAbout = ({name,age = 0}) => {
    return `${name} is awesome!
${name} is ${age} years old.`
}
console.log(tellMeAbout(friend));
console.log(tellMeAbout(dog));
console.log(tellMeAbout(friend2));
