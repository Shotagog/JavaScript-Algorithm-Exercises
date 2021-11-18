// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//######################################################################################################################

// solution 1
function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++){
        let stair = '';

        for (let col = 0; col < 2 * n - 1; col++){
            if(midPoint - row <= col && midPoint + row >= col){
                stair += '#'
            }else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}


// solution 2 recursion
// function pyramid(n, row = 0, stair = '') {
//     if(row === n) return;
//
//     if(stair.length === 2 * n - 1){
//         console.log(stair);
//         return pyramid(n, row + 1);
//     }
//
//     const midPoint = Math.floor((2 * n - 1) / 2);
//     let add;
//
//     if (midPoint - row <= stair.length && midPoint + row >= stair.length){
//         add = '#';
//     } else{
//         add = ' ';
//     }
//
//     pyramid(n, row, stair + add);
// }

console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))
