// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//######################################################################################################################

// function capitalize(str) {
//     let chars = str.split('');
//
//     for (let i = 0; i < chars.length; i++){
//         chars[0] = chars[0].toUpperCase();
//         if(chars[i] === ' '){
//             chars[i + 1] = chars[i + 1].toUpperCase()
//         }
//     }
//
//     return chars.join('');
// } // my solution


// solution 1 (most straightforward and easy)
function capitalize(str) {
    let words = [];
    let chars = str.split(' ');

    for (let char of chars){
        words.push(char[0].toUpperCase() + char.slice(1))
    }

    return words.join(' ')
}


// solution 2
// function capitalize(str) {
//     let result = str[0].toUpperCase();
//
//     for (let i = 1; i < str.length; i++){
//         if(str[i - 1] === ' '){
//             result += str[i].toUpperCase();
//         }else {
//             result += str[i];
//         }
//     }
//     return result;
// }

console.log(capitalize('a short sentence'))
console.log(capitalize('a lazy fox'))
console.log(capitalize('look, it is working!'))
