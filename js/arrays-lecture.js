var pets = ["Toby","Princess","Samson","Jill","Bubbles","Malu"];

for (var i = 0;i<pets.length;i++) {
    // console.log(pets[i]);
}

pets[pets.length] = "Lily";
// console.log(pets[pets.length-1]);

// pets[100] = "Roxeanne";
pets.forEach(function (pet, i, arr) {
    // console.log(pet);
    // console.log(arr[i]);
})


var tictactoe = [[' ', ' ', ' '],
                 [' ', ' ', ' '],
                 [' ', ' ', ' ']];
var takeTurn = function(who, row, column) {
    tictactoe[row][column] = who;
}
var printBoard = function() {
    for (var i = 0;i<tictactoe.length;i++) {
        console.log(' ' + tictactoe[i][0] + ' | ' + tictactoe[i][1] + ' | ' + tictactoe[i][2]);
        console.log("___________")
    }
}

// printBoard();


var fruit = ["apple", "orange", "banana"];
// fruit[fruit.length] = "pear"
// console.log(fruit);
// alert("Hello");
fruit.push("pear","pineapple","grape","apple","mango");
// fruit.push();
// fruit.push();
// fruit.push("mango");
// console.log(fruit.shift());
fruit.unshift("strawberry");
// console.log(fruit.indexOf("kiwi"));
// console.log(fruit.lastIndexOf("apple"));
// console.log(fruit[fruit.indexOf("apple")]);
// console.log(fruit.pop());
// console.log(fruit);

var fruit1thru3 = fruit.slice(0,3);
var fruit6thru8 = fruit.slice(5,8);
console.log(fruit6thru8);
console.log(fruit);


var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// var words = sentence.split(" ");
// console.log(words.slice(2,4));
// for (var i = 0;i<words.length; i++) {
//     // capitalize first letter
//     var word = words[i];
//     // var firstLetter = word.split()[0];
//     var letters = word.split("");
//     var capitalFirstLetter = letters[0].toUpperCase();
//     var capitalizedWord = "";
//     capitalizedWord += capitalFirstLetter;
//     for (var j=1;j<letters.length;j++) {
//         capitalizedWord += letters[j];
//     }
//     words[i] = capitalizedWord;
//
// }
// words.sort();
// sentence = words.join(" ");
// console.log(sentence);
// words.forEach(function(word){
//     // var firstLetter = word.split().unshift();
//     var letters = word.split();
//     var firstLetter = word.split()[0]
//         word.charAt(0) = word.charAt(0).toUpperCase()
// })


var nums