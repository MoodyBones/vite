export function cumulativeSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// without reduce or any methods
// function cumulativeSum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
