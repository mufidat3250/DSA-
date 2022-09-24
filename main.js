// insert an element  in an array at a particular index

const insertAtindex = () => {
  //the array
  let arr = [1, 20, 5, 78, 30];
  // position to insert
  let location = 3;
  let elem = 45;
  let size = arr.length;

  for (let i = size; i > location; i--) {
    //as long as i is greater than the location keep re-asigning the position of i
    arr[i] = arr[i - 1];
  }
  // if condition is no longer met ie i is no longer greater than location then asign location to element
  arr[location] = elem;
  return arr;
};

const deleteAtIndex = () => {
  const newArr = insertAtindex();

  // index to delete from
  let index = 3;
  for (let i = index; i < newArr.length - 1; i++) {
    newArr[i] = newArr[i + 1];
  }
  newArr.length--;
  console.log(newArr);
};

deleteAtIndex();

const searchArr = () => {
  let newArr = insertAtindex();
  let index = 9;
  for (let i = 0; i < newArr.length; i++) { 
    if (newArr[i] == index) {
      return 1;
    } else return 0;
  }
};
console.log(searchArr());
