// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// worst case of runtime n^2. Every single element added to array will take slightly more time to process
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j]; // swap values
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

// worst case of runtime n^2. Every single element added to array will take slightly more time to process
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i; // assume the element at 'i' is the least in the array, assign 'i' to indexOfMin
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){ // check if next element in the array is less then indexOfMin
                indexOfMin = j; // if true, record its index
            }
        }
        if(indexOfMin !== i){ // if the index of the current element and index of the 'lowest' element is not the same, swap em
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i]; // swap values
            arr[i] = lesser;
        }
    }

    return arr;
}


// medium case of runtime n*log(n)
function mergeSort(arr) {
    if(arr.length === 1){ // base case when there is only one element in the array
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // take everything from 0 but not including the center
    const right = arr.slice(center); // take everything after center

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length){ // check if there are some values in both arrays
        if(left[0] < right[0]){ // if first value of left array is less than first value of right array
            results.push(left.shift()); // take that value and push in results array
        }else{
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}


console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
console.log(selectionSort([100, -40, 500, -124, 0, 21, 7, 64, 743, 345, -90]));
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7, 23, 345, 567, -535, 464, 56]));


