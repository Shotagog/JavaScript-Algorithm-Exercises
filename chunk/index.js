// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// #####################################################################################################################

function chunk(array, size) {
    let res = [], start = 0;

    while (start < array.length){
        res.push(array.slice(start, start += size));
    }

    return res;
}


// function chunk(array, size) {
//     let res = [];
//     let start = 0;
//
//     for (let i = 0; i < array.length; i++){
//         if(start < array.length){
//             res.push(array.slice(start, start += size));
//         }
//     }
//
//     return res;
// }

// function chunk(array, size) {
//     let chunked = [];
//
//     for (let element of array){
//         const last = chunked[chunked.length - 1];
//
//         if(!last || last.length === size){
//             chunked.push([element])
//         }else {
//             last.push(element)
//         }
//     }
//
//     return chunked;
// }


console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 10))
