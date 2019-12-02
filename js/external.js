"use strict";

// console.log("hello from external");
// alert("Welcome to my website");

// var userColor = prompt("What is your favorite color?");
// var alertMessage = "Great, " + userColor + " is my favorite color too!";
// alert(alertMessage);


//3.1 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

//1. ask user what the rental fee is --> prompt & variable
//2. ask user how many days little mermaid --> prompt & variable
//3. ask user how many days brother bear --> prompt & variable
//4. ask user how many days hercules --> prompt & variable
//5. calculate the total price * number of days
//6. alert the total price

// var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
//
// // var dailyRentalRate = parseInt(prompt("How much is the daily rental rate?"));
//
// var mermaidDaysRented = Number(prompt("How many days are you renting the little mermaid?"))
//
// var brotherBearDaysRented = Number(prompt("How many days are you renting brother bear?"))
//
// var herculesDaysRented = Number(prompt("How many days are you renting hercules?"))
//
// var totalCost = (mermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRate;
//
// var alertMessage = "You owe $: " + totalCost;
//
// alert(alertMessage);

// 3.2  Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var googleRate = Number(prompt("What is your google rate?"));
// var amazonRate = Number(prompt("What is your amazon rate?"));
// var facebookRate = Number(prompt("What is your facebook rate?"));
//
// var googleHours = Number(prompt("How many hours did you work at google"));
// var amazonHours = Number(prompt("How many hours did you work at amazon"));
// var facebookHours = Number(prompt("How many hours did you work at facebook"));
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
//
// var alertMessage = "Your total pay is: $" + totalPay;
// alert(alertMessage);
//

// 3.3 A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
// var classIsNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// console.log("class not full " + classIsNotFull);
// console.log("no schedule conflicts: " + noScheduleConflicts);
//
// var studentEnrolled = classIsNotFull && noScheduleConflicts;
// console.log(studentEnrolled);
//
// alert("Student can enroll: " + studentEnrolled);


// 3.4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var numberOfItems = Number(prompt("How many items for checkout?")); //number
var offerValid = confirm("Is the offer valid?"); //boolean
var isPremiumMember = confirm("Are you a premium member?"); //boolean

var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);

alert("Can use discount: " + discountApplied)


















