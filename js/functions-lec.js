(function(){
    "use strict";
// alert("Hello"); // just to make sure things are connected
console.log("Let's learn about JavaScript Functions!!");
// functions, procedures, methods, sub-routines
// enables code reuse, better than copy/paste
// 5 - 50 lines of code 👍

    // var favoriteColor = prompt("What is your favorite color?");
    // alert(favoriteColor + " is a fantastic color!");

function colorGame() {
    var favoriteColor = prompt("What is your favorite color?");
    console.log(favoriteColor + " is a fantastic color!");
}

// colorGame();
// colorGame();


// running, calling, invoking, executing
// use () to call a function
function doSomething(something) {
    console.log(typeof something);
    something();
}
function f() {
    console.log("Do di doo!")
}

// doSomething(32);
// doSomething("banana");
// doSomething(f);
// arguments are passed in, parameters are in the function itself
// params are optional, return is optional

// function declaration(param){
//     // this is inside the body of the function
//     console.log("This is a function declaration.")
// }
// declaration();
//
// var expression = function (param) {
//     console.log("This is a function expression, aka an anonymous function.");
//     console.log("To invoke it later, we have to save it in a variable");
//     return param + 7;
//     console.log("Here is what was passed in: " + param);
//     alert("We will never get here!");
// }
// console.log(expression(32));

// function scope
// globally scoped
// var x = 300;
// var y = 100;
// var w = 777;
//
// function scopeExample() {
//     // locally scoped
//     var x = 1;
//     var y = 2;
//     var z = 7;
//     console.log('x: ' + x + ' y: ' + y + ' w: ' + w); // x: 1 y: 2
//     return x + y;
// }
//
// console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
// var returnValue = scopeExample();
// console.log(returnValue); // 3
// console.log(z); // error

// IIFE - Immediately Invoked Function Expression
// "use strict";
// (function(){
//  all the codes



// function - a series of commands grouped together
// argument - a value passed in to a function when it is invoked
// parameter - a placeholder for a value used in creating a function

})();