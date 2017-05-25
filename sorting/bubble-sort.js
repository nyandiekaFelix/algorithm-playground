/**
 * Helper method to swap number indexes in an array
 * @param {Array} arr           - Array with items
 * @param  {int} firstIndex     - First item to swap
 * @param  {int} secondIndex    - Second item to swap
 * @return {void}
 */

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


/**
 * Bubble sort implementation
 *  @param {Array} arrToSort     - Array to be sorted
 *  @return {Array}              - The sorted array  
 */

function bubbleSort(arrToSort) {
    const arrLength = arrToSort.length;

    //  Iterate over the array
    for (let index = 0; index < arrLength; index++) {
        for (let currentIndex = 0; currentIndex < (arrLength - index - 1); currentIndex++) {
            if (arrToSort[currentIndex] > arrToSort[currentIndex + 1]) {
                swap(arrToSort, currentIndex, currentIndex + 1)
            }
        }    
    }

    return arrToSort;
}

test = [10, 12, 372, 25, 17, 100, 223];
console.log(bubbleSort(test));






