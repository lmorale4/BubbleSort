function bubbleSort(array) {
  if (array.length <= 1) {
    return array
  } else {
    if (compare(array[0], array[1])) {
      swap.call(array, 0)
    }
    return array.slice(0, 1).concat(bubbleSort(array.slice(1)))
  }
}

function swap(index) {
  let temp = this[index];
  this[index] = this[index+1];
  this[index+1] = temp;
}

function compare(num1, num2) {
  return num2 < num1
}
