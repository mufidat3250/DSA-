let selection = [4, 3, 2, 1, 5];

const selectionsort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[smallest]) smallest = j;
    }

    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = arr[temp];
    }
  }
  return arr;
};
console.log(selectionsort(selection));

const printSquare = (n) => {
    
    if( n>0){
        for(let i = 0; i < n; i++){
            for(let j=0; j< n; j++){
                console.log('#'.repeat(j))
            }
        }
    }
}
printSquare(5)