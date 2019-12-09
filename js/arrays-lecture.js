var pets = ["Toby","Princess","Samson","Jill","Bubbles","Malu"];

for (var i = 0;i<pets.length;i++) {
    console.log(pets[i]);
}

pets[pets.length] = "Lily";
console.log(pets[pets.length-1]);

// pets[100] = "Roxeanne";
pets.forEach(function (pet, i, arr) {
    console.log(pet);
    // console.log(arr[i]);
})

