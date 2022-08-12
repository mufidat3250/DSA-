console.log("me,");

//inserting element in an array
// to insert an element in the array the size of the array is incremented by 1
//start shifting till you get to the index you want to add an item to

const addElement = () => {
  let arr = [1, 20, 5, 78, 30];
  //target index
  let pos = 2;
  //new element to insert
  let elem = 100;

  // console.log(arr);

  for (let i = arr.length; i > pos; i--) {
    //shift the element greater than the index
    arr[i] = arr[i - 1];
  }
  //then insert element at the position specified
  arr[pos] = elem;
  // console.log(arr);
};
addElement();


// TimeComplexity at best case 0(1) when inserting from the end of the array this is because there is no need to enter the forloop

// Time complexity at worst case is 0(n) when inserting from the front

//remove element from an array

const removeElement = () => {
  let index = 3;
  let arr = [1, 20, 5, 78, 30];
  let size = arr.length;

  for (let i = index; i < size - 1; i++) {
    //reposition the indexes till it get to the last index
    arr[i] = arr[i + 1];
  }
  //remove the last index
  arr.length--;
  console.log(arr);
};
removeElement();

const searchItem = () => {
  let index = 7;
  let arr = [1, 20, 5, 78, 30];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] = arr[index])) {
      return true;
    } else return -1;
  }
};
console.log(searchItem());
