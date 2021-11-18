// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//####################################################################################################################

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// function reverse(str) {
//     let arr = str.split('');
//     let rev = [];
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i]);
//     }
//
//     return rev.join('')
// }

// linear runtime - each additional character = 1 step through 1 loop
// function reverse(str) {
//     let reversed = '';
//
//     for(let char of str){
//         reversed = char + reversed;
//     }
//
//     return reversed;
// }


function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}


console.time("T")
console.log(reverse('apple'));
console.log(reverse('hello'));
console.log(reverse('Greetings!'))
console.timeEnd("T")
