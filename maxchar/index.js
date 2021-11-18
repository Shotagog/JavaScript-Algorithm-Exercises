// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let res = '';
//     let spl = str.split('');
//
//     for (let i = 0; i < spl.length; i++){
//         if(spl[i] === spl[i + 1]){
//             res = spl[i]
//         }
//     };
//
//     return res;
// }

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let ch of str){
        //charMap[ch] = charMap[ch] + 1 || 1;
        charMap[ch] ? charMap[ch]++ : charMap[ch] = 1;
    }

    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.time("T")
console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
console.log(maxChar("asasaargrgrgrgrggggga"));
console.timeEnd("T")
