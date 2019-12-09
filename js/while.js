"use strict";

// var x = 2;
//
// while(x <= 65536){
// 	console.log(x);
// 	x *= 2;
// 	// x = x * 2;
// }

// 1. Generate total amount of cones - happens one time --> allCones

// 2. Customer wants to buy x amount of cones --> conesPurchased
// 3. We need to check to see if we have that amount of cones available
// 4. If not (sad path) --> sorryMessage
// 5. If we do have enough cones (happy path) --> happyConesMessage
//      subtract the amount of cones sold from allCones
// 6. repeat until I dont have any cones left --> allCones > 0

// This is how we get total number of cones to sell
var allCones = Math.floor(Math.random() * 50) + 50;


do{
	//This is how many cones are purchased by each customer
	var conesPurchased = Math.floor(Math.random() * 5) + 1;

	//checks if I have enough cones to sell
	if(conesPurchased > allCones){
		// sad path - i cant sell you cones because i dont have enough

		var sadConesMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + "....";

		console.log(sadConesMessage);


	} else {
		//happy path - I can sell you cones! because I have enough
		allCones -= conesPurchased;

		var happyConesMessage = conesPurchased + " cones sold ... " + allCones + " cones to go";
		console.log(happyConesMessage);
	}


} while (allCones > 0)

console.log("yay i sold all the cones");















