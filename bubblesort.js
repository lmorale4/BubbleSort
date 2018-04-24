function bubbleSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    // if (compare(array[0], array[1])) {
    //   swap.call(array, 0);
    // }
    // array = array.slice(0, 1).concat(bubbleSort(array.slice(1)));
    for (let i = 0; i < array.length - 1; i++) {
      if (compare(array[i], array[i + 1])) {
        swap(array, i);
      }
    }
    return bubbleSort(array.slice(0, -1)).concat(array[array.length - 1]);
  }
}

function swap(arr, index) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

function compare(num1, num2) {
  console.log('compare was called', num1, num2);
  return num2 < num1;
}
