// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var phrase = "i";

var singleVowelWords = function(phrase) {
    if (phrase === vowels) {
        return (phrase + "ay");
    } else {
        return (phrase + "");
    }
};

console.log(singleVowelWords)










// //user front end logic
// $(document).ready(function() {
//     $(form).submit(function(event) {
//         event.preventDefault();

//     })
// })