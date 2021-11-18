// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//######################################################################################################################

function anagrams(stringA, stringB) {
    return helperFunc(stringA) === helperFunc(stringB);
}

function helperFunc(str){
    return str.replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join();
}

// solution 2
// function anagrams(stringA, stringB) {
//     let str1 = hlp(stringA);
//     let str2 = hlp(stringB);
//
//     if(Object.keys(str1).length !== Object.keys(str2).length){
//         return false;
//     }
//
//     for (let char in str1){
//         if(str1[char] !== str2[char]){
//             return false;
//         }
//     }
//
//     return true;
// }
//
// function hlp(str){
//     let charMap = {};
//     let res = str.replace(/[^\w]/g, '').toLowerCase();
//
//     for (let char of res) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1;
//     }
//     return charMap;
// }

console.time("T")
console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.timeEnd("T")

