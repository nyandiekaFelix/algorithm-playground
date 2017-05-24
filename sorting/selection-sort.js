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
 * main function to sort array 
 * @param {Array} arrToSort     - Array to be sorted
 * @return {Array}              - The sorted array 
 */

function selectionSort(arrToSort) {
    const arrLength = arrToSort.length;

    for (let index = 0; index < arrLength; index++) {
        // set current index as minimum
        let min = index;

        // find minimum in unsorted sub-array
        for (let nextIndex = index + 1; nextIndex < arrLength; nextIndex++) {
            // if next number is less than the minimum, swap them
            if (arrToSort[nextIndex] < arrToSort[min]) {
                min = nextIndex;
            }
        }

        if (index != min) {
            swap(arrToSort, index, min);
        }
    }

    return arrToSort;
}

test = [10, 12, 372, 25, 17, 100, 223];
console.log(selectionSort(test));