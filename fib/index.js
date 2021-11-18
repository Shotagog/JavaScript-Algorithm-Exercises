// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//######################################################################################################################
// global memoization function
// function memoize(fn) {
//     const cache = {};
//     return function (...args) {
//         if(cache[args]){
//             return cache[args];
//         }
//
//         const result = fn.apply(this, args);
//         cache[args] = result;
//
//         return result;
//     };
// };

//console.log(memoize(fib)); //call fib function within memoize function


// solution 1 // recursive
function fib(n, memo = {}) {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

// solution 2 // iterative //
// function fib(n) {
//     let arr = [];
//
//     for (let i = 0; i <= n; i++){
//         const a = arr[i - 1];
//         const b = arr[i - 2];
//         if(i < 2) {
//             arr.push(i);
//         }else{
//             arr.push(a + b)
//         }
//     }
//
//     return arr[n];
// }

console.time("T")
console.log(fib(8))
console.timeEnd("T")