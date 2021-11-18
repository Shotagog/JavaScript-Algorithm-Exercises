// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//######################################################################################################################

// function reverseInt(n) {
//     let tos = n.toString().split('').reverse();
//     let num = [];
//
//     for (let i = tos.length; i >= 0; i--){
//         if(parseInt(tos[i]) > 0){
//             num.push(tos[i])
//         }
//     };
//
//     if(n < 0){
//         num.unshift('-');
//     };
//
//     return parseInt(num.join(''));
// }

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n); // Math.sign() returns negative numbers if exists
    //return n < 0 ? parseInt(reversed) * -1 : parseInt(reversed); // this line returns same result as above one
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
