// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let char = ''
//     for (let i = 0; i < n; i++){
//         console.log(char += '#')
//     }
// } // my solution


// solution 1 // O(n^2) quadratic time complexity
function steps(n) {
    for (let row = 0; row < n; row++){
        let stair = '';

        for (let col = 0; col < n; col++){
            col <= row ? stair += '#' : stair += ' '
        }
        console.log(stair)
    }
}


// solution 2 recursion
// function steps(n, row = 0, stair = '') {
//     if(row === n) return;
//
//     if(n === stair.length){
//         console.log(stair);
//         return steps(n, row + 1);
//     }
//
//     if (stair.length <= row){
//         stair += '#';
//     } else{
//         stair += ' ';
//     }
//
//     steps(n, row, stair);
// }


console.log(steps(2))
console.log(steps(3))
console.log(steps(4))
