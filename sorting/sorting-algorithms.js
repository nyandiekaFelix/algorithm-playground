class Sorter {

    constructor(input, strategy) {
        this.input = input;
        this.strategy = strategy;
    }

    sort() {
        return this.strategy(this.input);
    }

}

/**
 * Helper method to swap number indexes in an array
 * @param {Array} data          - Array with items
 * @param  {int} first     - First item to swap
 * @param  {int} second    - Second item to swap
 * @return {void}
 */

function swap(data, first, second) {
    let temp = data[first];
    data[first] = data[second];
    data[second] = temp;
}


/**
 * Sort array using bubble sort algorithm
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const bubbleSort = (data) => {
    const arrLength = data.length;

    for (let index = 0; index < arrLength; index++) {
        for (let current = 0; current < (arrLength - index-1); current++){
            // Check if current index is greater than the next item in array 
            if (data[current] > data[current + 1]){
                swap(data, current, current + 1);
            }
        }
    }

    return console.log(`using bubble sort: `, data);
};


/**
 * Sort array using selection sort algorithm
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const selectionSort = (data) => {
    const arrLength = data.length;

    for (let index = 0; index < arrLength; index++) {
        // set current index as the minimum number in array
        let min = index;

        // find minimum in unsorted array
        for (let current = index + 1; current < arrLength; current++){
            // check if current item in array is smaller than minimum
            if (data[current] < data[min]){
                min = current;
            }
        }

        if (index !== min) {
            swap(data, index, min);
        }
    }
    
    return console.log('using selection sort: ', data);
};


/**
 * Sort array using two different implementations of the
 * merge sort algorithm
 * 
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const mergeSort = (data) => {

    const variations = {
        
        topDown: function(array) {

        },

        bottomUp: function(array) {

        }
    };

    
};


/**
 * Sort array using insertion sort algorithm
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const insertionSort = (data) => {};

/**
 * Sort array using shell sort algorithm
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const shellSort = (data) => {};

/**
 * Sort array using quick sort algorithm
 * @param {Array} data  - Array to be sorted
 * @return {Array}      - The sorted array
 */
const quickSort = (data) => {};



const testArray = [10, 12, 372, 25, 17, 100, 223, 7, 54, 402];

const bubble = new Sorter(testArray, bubbleSort);
const selection = new Sorter(testArray, selectionSort);
/* const merge = new Sorter(testArray, mergeSort);
const insertion = new Sorter(testArray, insertionSort);
const shell = new Sorter(testArray, shellSort);
const quick = new Sorter(testArray, quickSort); */

console.log('test array: ', testArray);

bubble.sort();
selection.sort();
/* merge.sort(testArray);
insertion.sort(testArray);
shell.sort(testArray);
quick.sort(testArray); */