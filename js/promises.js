// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
}
wait(3000).then(() => console.log('monkey'));
wait(1000).then(() => console.log('banana'));
console.log("Hello");

// Fun api to play with
// const wait2 = () => {
//     return fetch("https://icanhazdadjoke.com/")
//         .then(resp => resp.json());
// }
// wait2().then(data => {
//         console.log(data);
//     })

// This is from the lesson
// fetch('https://api.github.com/users')
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(users => {
//         console.log(users)
//         return users.map(user => user.login);
//     })
//     .then(usernames => console.log(usernames))
    // .then(usernames => users.forEach((username) => {
    //     // do something with each username
    // }))
    // .catch(error => console.error(error))

// We were working on this solution and couldn't make it work
// const lastCommit = (username) => {
//     // return a promise that resolves to
//     // usernames last commit time
//     let url = `https://api.github.com/users/${username}/events/public`
//     fetch(url, {headers: {'Authorization': `token ${githubPAT}`}})
//         .then(data => data.json())
//         .then(data => {
//             for (let i = 0;i<data.length;i++) {
//                 if (data[i].type === "PushEvent")
//                     return data[i];
//             }
//             // for (let event of data) {
//             //     if (event.type === "PushEvent")
//             //         return event;
//             // }
//         })
//         // .then(data => console.log(data))
//         .then(firstPushEvent => {
//             return firstPushEvent.created_at;
//         })
//
// }
// console.log(lastCommit("danielfryar"));;

// Working solution
const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${githubPAT}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};
lastCommit("danielfryar");