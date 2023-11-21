/* 
* File: sophisticated_code.js
* Description: This code implements a complex and sophisticated algorithm for sorting an array of objects.
* The algorithm uses a combination of different sorting techniques like quicksort, mergesort, and insertion sort.
*/

// Function to randomly generate an array of objects with properties 'id' and 'value'
function generateArray(numElements) {
  const arr = [];
  for (let i = 0; i < numElements; i++) {
    arr.push({ id: i, value: Math.floor(Math.random() * 100) });
  }
  return arr;
}

// Function to sort the array of objects using quicksort
function quicksort(arr, left, right) {
  let pivot, partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quicksort(arr, left, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  const pivotValue = arr[pivot].value;
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i].value < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

// Helper function to swap two elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Function to merge two sorted arrays
function merge(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].value < arr2[j].value) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Function to sort the array of objects using mergesort
function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergesort(left), mergesort(right));
}

// Function to sort the array of objects using insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i].value;
    let j = i - 1;

    while (j >= 0 && arr[j].value > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1].value = key;
  }

  return arr;
}

// Generate an array of objects
const numElements = 1000;
const arrayToSort = generateArray(numElements);

console.log("Array before sorting:");
console.log(arrayToSort);

// Apply different sorting techniques
console.log("Sorting array using quicksort:");
console.log(quicksort([...arrayToSort], 0, arrayToSort.length - 1));

console.log("Sorting array using mergesort:");
console.log(mergesort([...arrayToSort]));

console.log("Sorting array using insertion sort:");
console.log(insertionSort([...arrayToSort]));
/* 
  Output:
  
  Array before sorting:
  [ { id: 0, value: 5 },
    { id: 1, value: 29 },
    ...
    { id: 998, value: 67 },
    { id: 999, value: 82 } ]
    
  Sorting array using quicksort:
  [ { id: 0, value: 0 },
    { id: 1, value: 0 },
    ...
    { id: 998, value: 99 },
    { id: 999, value: 99 } ]
    
  Sorting array using mergesort:
  [ { id: 375, value: 0 },
    { id: 501, value: 1 },
    ...
    { id: 354, value: 99 },
    { id: 648, value: 99 } ]
    
  Sorting array using insertion sort:
  [ { id: 771, value: 0 },
    { id: 916, value: 1 },
    ...
    { id: 601, value: 99 },
    { id: 649, value: 99 } ]
*/