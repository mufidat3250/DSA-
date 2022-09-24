/* principle of binary search
    -it must sorted
    -it  make use of the principle of divide and conquor Olog(n)
    -faster than linear search
    - best case senerio 0(1) and worst case senerio Olog(n)
*/
let arr = [1, 2, 3, 5, 7, 8, 9, 10, 12];

const binary = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (value == guess) {
      return mid;
    } else if (value < guess) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
console.log(binary(arr, 5));
