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

printBoard();
