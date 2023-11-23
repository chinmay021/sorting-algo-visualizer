export function createBars(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    const active = false;
    const sorted = false;
    array[i] = [value, active, sorted];
  }

  return array;
}

export let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  const swaps = [];
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        swaps.push([i, i + 1]);
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        checked = true;
      }
    }
    len--;
  } while (checked);
  return swaps;
};

export function insertionSort(arr) {
  const swaps = [];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swaps.push([j, j - 1]);
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return swaps;
}

export function shellSort(arr) {
  // Start with a big gap, then reduce the gap
  const swaps = [];
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < arr.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        if (arr[i + gap] >= arr[i]) break;
        else {
          swaps.push([i, i + gap]);
          [arr[i + gap], arr[i]] = [arr[i], arr[i + gap]];
        }
      }
    }
  }
  return swaps;
}


export function selectionSort(arr) {
  const swaps = [];
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      swaps.push([i, lowest]);
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return swaps;
}


export function quickSort(arr, left = 0, right = arr.length - 1, swaps = []) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right, swaps);
    quickSort(arr, left, pivotIndex - 1, swaps);
    quickSort(arr, pivotIndex + 1, right, swaps);
  }
  return swaps;
}

function partition(arr, left, right, swaps) {
  const pivot = arr[left];
  let storeIndex = left + 1;

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < pivot || (arr[i] === pivot && Math.random() < 0.5)) {
      swaps.push([i, storeIndex]);
      [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
      storeIndex++;
    }
  }
  swaps.push([left, storeIndex - 1]);

  [arr[left], arr[storeIndex - 1]] = [arr[storeIndex - 1], arr[left]];

  return storeIndex - 1;
}

// function merge(left, right, swaps) {
//   let sortedArr = []; // the sorted items will go here
//   while (left.length && right.length) {
//     // Insert the smallest item into sortedArr
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//       swaps.push([left[0], right[0]])

//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   // Use spread operators to create a new array, combining the three arrays
//   return [...sortedArr, ...left, ...right];
// }

// export function mergeSort(arr, swaps = []) {
//   // Base case
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   // Recursive calls
//   let left = mergeSort(arr.slice(0, mid), swaps);
//   console.log(left)
//   let right = mergeSort(arr.slice(mid), swaps);
//   return merge(left, right, swaps);
// }

export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    // animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    // animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    // animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
