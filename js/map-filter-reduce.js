"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'daniel',
        email: 'daniel@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// .filter takes in a function which receives an item and decides (returns boolean) whether the item should make it or not
let trilinguists = users.filter(user => user.languages.length >= 3);
// console.log(trilinguists);

// TODO: Use .map to create an array of strings where each element is a user's email address
// let addressList = users.map(function(user) {
//     return user.email;
// });
let addressList = users.map(user => user.email);
console.log(addressList);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// let totalYears = 0;
// for (let user of users) {
//     totalYears += user.yearsOfExperience;
// }
let totalYears = users.reduce((runningTotal, user) => {
    return runningTotal += user.yearsOfExperience;
},0);
console.log(`Total years of experience: ${totalYears}
Average: ${totalYears/users.length}`);


// TODO: Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longestSoFar, user) => {
    if (user.email.length > longestSoFar.length) return user.email;
    else return longestSoFar;
}, "@");
console.log(longestEmail);


// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let greeting = users.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, "Your instructors are: ");
greeting = greeting.substring(0,greeting.length-2) + ".";
console.log(greeting);


// TODO: Bonus - Use .reduce to get the unique list of languages from the list of users.
let knownLanguages = users.reduce((knownLanguages, user) => {
    // filter the user.languages for the ones not included in languages list
    // for (let lang in languages) {
    //     console.log(lang);
    //     if (!languages.includes(lang))  languages.push(lang);\
    // }
    user.languages.forEach( (language) => {
        if (knownLanguages.includes(language)){
        } else {
            knownLanguages.push(language);
        }
    });
    // languages.push(user.languages.filter((lang) => {
    //     return !languages.includes(lang)
    // }))

    return knownLanguages;
}, []);
console.log(knownLanguages);

