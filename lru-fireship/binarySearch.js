// add default values so that the first time its called it will search over the entire array
export function search(arr, target, start = 0, end = arr.length - 1) {
  console.log(start, end);

  // condition: if the start is greater than the end, then its not found
  if (start > end) {
    console.log('Not Found!');
    return -1;
  }

  // important: find the middle of the array
  const middle = Math.floor((start + end) / 2); // wrap in Math.floor to get an integer instead of a decimal

  // 3 things can happen

  // condition 1: middle index can equal target
  if (arr[middle] === target) {
    console.log(`Yay, ${target} found at index ${middle}`);
    return middle;
  }

  // condition 2: middle index is greater than target
  if (arr[middle] > target) {
    // if true then we overshot the search
    // use recursion to search again from start to middle
    // this essential cuts the search area in half
    // e.g. if the list was 10 million long, its now 5 million
    return search(arr, target, start, middle - 1);
  }

  // condition 3: middle index is less than target
  if (arr[middle] < target) {
    // similar to above but now search again with the middle to end
    return search(arr, target, middle + 1, end);
  }
}
