const loopThroughNum = (num) => {
  //   console.log(num);
  if (num > 0) loopThroughNum(num - 1);
};

loopThroughNum(9);

// recursion to solve factoria

//example of direct recursion
const factoria = (x) => {
  if (x == 1 || x === 0) {
    return 1;
  } else {
    return x * factoria(x - 1);
  }
};
console.log(factoria(4));
const sum = (n) => {
  console.log(n);
  if (n <= 1) return n;
  else {
    return n + sum(n - 1);
  }
};
// console.log(sum(4), "sum");

//example of indirect recursion;

function func1(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * func2(n - 1);
  }
}
function func2(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * func1(n - 1);
  }
}

const callRecution = () => {
  let n = 5;
  console.log(func1(n), 'redd');
  let num = summ(n)
  console.log(num , 'sum value')
};

callRecution()

//print sum of n natural numbers using recursion

function summ(x){
  console.log(x, 'x value')
  let S = 0
  if(x<=1)
      return 1
  else {
    S = x + summ(x-1)
  }
  return S
}


//tail and nontail
//the major diffrence between tail and non tail recuatio is that 
//for tail: when a function call it self there is no other activities to peform;
//non tail: when t function call it self there is other activities that is performed

//intervire question 1 with fibonacci

const fibonacci =(n)=>{
// edge cases n must be >=0;
//n value should not be null

    if(n < 0 || !n) return

    for(let i=0; i<n; i++){
      for(let j =1; j< n; j++){
      }
    }



}
fibonacci(5)