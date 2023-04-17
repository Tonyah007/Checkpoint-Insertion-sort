// This algorithm is to use insertion sort to determine the proper order of an array

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {
           if (array[j] < array[j-1]) {
            const temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
           }
            else {break;
        }
        }
    }

    return array;
}

console.log(insertionSort([1, 9, 12, 5, 8, 4, 7, 14]))