
// just and array container for storing prime numbers
let y = [];

//for loop for printing numbers from 1 to hundred with conditions applied
for(let i=1 ; i<=100 ; i+=1){
  if(isPrime(i,y)){
    console.log("prime");
  }
  else if(i%15===0){
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    console.log("Fizz");
  }
  else if(i%5===0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

//function for checking wether a number is prime or not.
function isPrime(x, y){
  if(x < 2){
    return false
  }
  else if(x==2){
    y.push(x);
    return true;
  }
  for(let elem of y){
    if(x%elem ===0){
      return false;
    }
  }
  for(let j = y[y.length -1] + 1 ; j < x ; j+=1){
    if(x%j ===0){
      return false;
    }
  }
  y.push(x);
  return true;
}

console.log(y);
